import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import { createClient } from "npm:@supabase/supabase-js@2";

const app = new Hono();

// Initialize Supabase client for auth
const getSupabaseClient = () => {
  return createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
  );
};

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-b8aa36f4/health", (c) => {
  return c.json({ status: "ok" });
});

// ==================== AUTHENTICATION ====================

// User signup
app.post("/make-server-b8aa36f4/auth/signup", async (c) => {
  try {
    const { email, password, name } = await c.req.json();
    
    if (!email || !password || !name) {
      return c.json({ error: "Email, password, and name are required" }, 400);
    }
    
    const supabase = getSupabaseClient();
    
    // Create user with Supabase auth
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: { name },
      // Automatically confirm the user's email since an email server hasn't been configured
      email_confirm: true
    });
    
    if (error) {
      console.log(`Error creating user during signup: ${error.message}`);
      return c.json({ error: error.message }, 400);
    }
    
    // Create user profile in KV store
    await kv.set(`user:${data.user.id}`, {
      id: data.user.id,
      email,
      name,
      createdAt: new Date().toISOString()
    });
    
    return c.json({ 
      user: {
        id: data.user.id,
        email: data.user.email,
        name
      }
    });
  } catch (error) {
    console.log(`Unexpected error during signup: ${error}`);
    return c.json({ error: "Signup failed" }, 500);
  }
});

// User signin
app.post("/make-server-b8aa36f4/auth/signin", async (c) => {
  try {
    const { email, password } = await c.req.json();
    
    if (!email || !password) {
      return c.json({ error: "Email and password are required" }, 400);
    }
    
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    );
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (error) {
      console.log(`Error signing in user: ${error.message}`);
      return c.json({ error: error.message }, 401);
    }
    
    // Get user profile
    const userProfile = await kv.get(`user:${data.user.id}`);
    
    return c.json({
      access_token: data.session.access_token,
      user: {
        id: data.user.id,
        email: data.user.email,
        name: userProfile?.name
      }
    });
  } catch (error) {
    console.log(`Unexpected error during signin: ${error}`);
    return c.json({ error: "Signin failed" }, 500);
  }
});

// Get current user
app.get("/make-server-b8aa36f4/auth/user", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: "No access token provided" }, 401);
    }
    
    const supabase = getSupabaseClient();
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);
    
    if (error || !user) {
      return c.json({ error: "Unauthorized" }, 401);
    }
    
    const userProfile = await kv.get(`user:${user.id}`);
    
    return c.json({
      user: {
        id: user.id,
        email: user.email,
        name: userProfile?.name
      }
    });
  } catch (error) {
    console.log(`Error fetching user: ${error}`);
    return c.json({ error: "Failed to fetch user" }, 500);
  }
});

// ==================== PRODUCTS ====================

// Get all products
app.get("/make-server-b8aa36f4/products", async (c) => {
  try {
    const products = await kv.getByPrefix("product:");
    return c.json({ products: products || [] });
  } catch (error) {
    console.log(`Error fetching products: ${error}`);
    return c.json({ error: "Failed to fetch products" }, 500);
  }
});

// Get products by category
app.get("/make-server-b8aa36f4/products/category/:category", async (c) => {
  try {
    const category = c.req.param('category');
    const allProducts = await kv.getByPrefix("product:");
    const categoryProducts = allProducts.filter((p: any) => p.category === category);
    return c.json({ products: categoryProducts });
  } catch (error) {
    console.log(`Error fetching products by category: ${error}`);
    return c.json({ error: "Failed to fetch products" }, 500);
  }
});

// Get single product
app.get("/make-server-b8aa36f4/products/:id", async (c) => {
  try {
    const id = c.req.param('id');
    const product = await kv.get(`product:${id}`);
    
    if (!product) {
      return c.json({ error: "Product not found" }, 404);
    }
    
    return c.json({ product });
  } catch (error) {
    console.log(`Error fetching product: ${error}`);
    return c.json({ error: "Failed to fetch product" }, 500);
  }
});

// Create product (admin only - would need admin check in production)
app.post("/make-server-b8aa36f4/products", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: "Unauthorized" }, 401);
    }
    
    const supabase = getSupabaseClient();
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);
    
    if (error || !user) {
      return c.json({ error: "Unauthorized" }, 401);
    }
    
    const product = await c.req.json();
    const productId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    const newProduct = {
      ...product,
      id: productId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    await kv.set(`product:${productId}`, newProduct);
    
    return c.json({ product: newProduct });
  } catch (error) {
    console.log(`Error creating product: ${error}`);
    return c.json({ error: "Failed to create product" }, 500);
  }
});

// ==================== CART ====================

// Get user's cart
app.get("/make-server-b8aa36f4/cart", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: "Unauthorized" }, 401);
    }
    
    const supabase = getSupabaseClient();
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);
    
    if (error || !user) {
      return c.json({ error: "Unauthorized" }, 401);
    }
    
    const cart = await kv.get(`cart:${user.id}`) || { items: [] };
    return c.json({ cart });
  } catch (error) {
    console.log(`Error fetching cart: ${error}`);
    return c.json({ error: "Failed to fetch cart" }, 500);
  }
});

// Add item to cart
app.post("/make-server-b8aa36f4/cart/items", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: "Unauthorized" }, 401);
    }
    
    const supabase = getSupabaseClient();
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);
    
    if (error || !user) {
      return c.json({ error: "Unauthorized" }, 401);
    }
    
    const { productId, quantity = 1, variant } = await c.req.json();
    
    const cart = await kv.get(`cart:${user.id}`) || { items: [] };
    
    // Check if item already exists in cart
    const existingItemIndex = cart.items.findIndex(
      (item: any) => item.productId === productId && JSON.stringify(item.variant) === JSON.stringify(variant)
    );
    
    if (existingItemIndex > -1) {
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      cart.items.push({
        productId,
        quantity,
        variant,
        addedAt: new Date().toISOString()
      });
    }
    
    cart.updatedAt = new Date().toISOString();
    await kv.set(`cart:${user.id}`, cart);
    
    return c.json({ cart });
  } catch (error) {
    console.log(`Error adding to cart: ${error}`);
    return c.json({ error: "Failed to add to cart" }, 500);
  }
});

// Update cart item quantity
app.put("/make-server-b8aa36f4/cart/items/:productId", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: "Unauthorized" }, 401);
    }
    
    const supabase = getSupabaseClient();
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);
    
    if (error || !user) {
      return c.json({ error: "Unauthorized" }, 401);
    }
    
    const productId = c.req.param('productId');
    const { quantity } = await c.req.json();
    
    const cart = await kv.get(`cart:${user.id}`) || { items: [] };
    
    const itemIndex = cart.items.findIndex((item: any) => item.productId === productId);
    
    if (itemIndex === -1) {
      return c.json({ error: "Item not found in cart" }, 404);
    }
    
    if (quantity <= 0) {
      cart.items.splice(itemIndex, 1);
    } else {
      cart.items[itemIndex].quantity = quantity;
    }
    
    cart.updatedAt = new Date().toISOString();
    await kv.set(`cart:${user.id}`, cart);
    
    return c.json({ cart });
  } catch (error) {
    console.log(`Error updating cart: ${error}`);
    return c.json({ error: "Failed to update cart" }, 500);
  }
});

// Remove item from cart
app.delete("/make-server-b8aa36f4/cart/items/:productId", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: "Unauthorized" }, 401);
    }
    
    const supabase = getSupabaseClient();
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);
    
    if (error || !user) {
      return c.json({ error: "Unauthorized" }, 401);
    }
    
    const productId = c.req.param('productId');
    const cart = await kv.get(`cart:${user.id}`) || { items: [] };
    
    cart.items = cart.items.filter((item: any) => item.productId !== productId);
    cart.updatedAt = new Date().toISOString();
    
    await kv.set(`cart:${user.id}`, cart);
    
    return c.json({ cart });
  } catch (error) {
    console.log(`Error removing from cart: ${error}`);
    return c.json({ error: "Failed to remove from cart" }, 500);
  }
});

// Clear cart
app.delete("/make-server-b8aa36f4/cart", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: "Unauthorized" }, 401);
    }
    
    const supabase = getSupabaseClient();
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);
    
    if (error || !user) {
      return c.json({ error: "Unauthorized" }, 401);
    }
    
    await kv.del(`cart:${user.id}`);
    
    return c.json({ cart: { items: [] } });
  } catch (error) {
    console.log(`Error clearing cart: ${error}`);
    return c.json({ error: "Failed to clear cart" }, 500);
  }
});

// ==================== ORDERS ====================

// Create order
app.post("/make-server-b8aa36f4/orders", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: "Unauthorized" }, 401);
    }
    
    const supabase = getSupabaseClient();
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);
    
    if (error || !user) {
      return c.json({ error: "Unauthorized" }, 401);
    }
    
    const orderData = await c.req.json();
    const orderId = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    
    const order = {
      ...orderData,
      id: orderId,
      userId: user.id,
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    await kv.set(`order:${orderId}`, order);
    
    // Add to user's order list
    const userOrders = await kv.get(`user:${user.id}:orders`) || [];
    userOrders.push(orderId);
    await kv.set(`user:${user.id}:orders`, userOrders);
    
    // Clear user's cart after order
    await kv.del(`cart:${user.id}`);
    
    return c.json({ order });
  } catch (error) {
    console.log(`Error creating order: ${error}`);
    return c.json({ error: "Failed to create order" }, 500);
  }
});

// Get user's orders
app.get("/make-server-b8aa36f4/orders", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: "Unauthorized" }, 401);
    }
    
    const supabase = getSupabaseClient();
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);
    
    if (error || !user) {
      return c.json({ error: "Unauthorized" }, 401);
    }
    
    const orderIds = await kv.get(`user:${user.id}:orders`) || [];
    const orders = await kv.mget(orderIds.map((id: string) => `order:${id}`));
    
    return c.json({ orders: orders || [] });
  } catch (error) {
    console.log(`Error fetching orders: ${error}`);
    return c.json({ error: "Failed to fetch orders" }, 500);
  }
});

// Get single order
app.get("/make-server-b8aa36f4/orders/:id", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: "Unauthorized" }, 401);
    }
    
    const supabase = getSupabaseClient();
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);
    
    if (error || !user) {
      return c.json({ error: "Unauthorized" }, 401);
    }
    
    const orderId = c.req.param('id');
    const order = await kv.get(`order:${orderId}`);
    
    if (!order) {
      return c.json({ error: "Order not found" }, 404);
    }
    
    // Verify order belongs to user
    if (order.userId !== user.id) {
      return c.json({ error: "Unauthorized" }, 403);
    }
    
    return c.json({ order });
  } catch (error) {
    console.log(`Error fetching order: ${error}`);
    return c.json({ error: "Failed to fetch order" }, 500);
  }
});

// ==================== SEED DATA ====================

// Initialize seed data (run once to populate initial products)
app.post("/make-server-b8aa36f4/seed", async (c) => {
  try {
    // Check if products already exist
    const existingProducts = await kv.getByPrefix("product:");
    if (existingProducts && existingProducts.length > 0) {
      return c.json({ message: "Database already seeded" });
    }
    
    // Seed products
    const seedProducts = [
      // Pashmina Shawls
      {
        id: 'pashmina-1',
        name: 'Classic Pashmina Shawl - Crimson',
        category: 'pashmina-shawls',
        price: 12500,
        originalPrice: 15000,
        image: 'https://images.unsplash.com/photo-1510574457807-3d9bf494ff6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXNobWluYSUyMHNoYXdsfGVufDF8fHx8MTc2NjY0NjUxNHww&ixlib=rb-4.1.0&q=80&w=1080',
        region: 'Jammu Kashmir',
        description: 'Hand-woven pure Pashmina shawl with traditional embroidery',
        inStock: true,
        stock: 15,
        rating: 4.8
      },
      {
        id: 'pashmina-2',
        name: 'Embroidered Pashmina - Royal Blue',
        category: 'pashmina-shawls',
        price: 14500,
        originalPrice: 18000,
        image: 'https://images.unsplash.com/photo-1510574457807-3d9bf494ff6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXNobWluYSUyMHNoYXdsfGVufDF8fHx8MTc2NjY0NjUxNHww&ixlib=rb-4.1.0&q=80&w=1080',
        region: 'Jammu Kashmir',
        description: 'Luxurious Pashmina with intricate Kashmiri embroidery',
        inStock: true,
        stock: 10,
        rating: 4.9
      },
      // Kalamkari
      {
        id: 'kalamkari-1',
        name: 'Traditional Kalamkari Fabric',
        category: 'kalamkari',
        price: 3500,
        originalPrice: 4500,
        image: 'https://images.unsplash.com/photo-1762173886363-de541417e48e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYWxhbWthcmklMjBmYWJyaWN8ZW58MXx8fHwxNzY2NjQ2NTE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
        region: 'Andhra Pradesh',
        description: 'Hand-painted Kalamkari fabric with natural dyes',
        inStock: true,
        stock: 25,
        rating: 4.7
      },
      // Kolhapuri Chappals
      {
        id: 'kolhapuri-1',
        name: 'Handcrafted Kolhapuri Chappal',
        category: 'kolhapuri-chappals',
        price: 1200,
        originalPrice: 1500,
        image: 'https://images.unsplash.com/photo-1765961999112-7aea89449b62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb2xoYXB1cmklMjBjaGFwcGFsfGVufDF8fHx8MTc2NjY0NjUxNXww&ixlib=rb-4.1.0&q=80&w=1080',
        region: 'Kolhapur',
        description: 'Authentic leather Kolhapuri footwear',
        inStock: true,
        stock: 30,
        rating: 4.6
      }
    ];
    
    for (const product of seedProducts) {
      await kv.set(`product:${product.id}`, {
        ...product,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
    }
    
    return c.json({ message: "Database seeded successfully", count: seedProducts.length });
  } catch (error) {
    console.log(`Error seeding database: ${error}`);
    return c.json({ error: "Failed to seed database" }, 500);
  }
});

Deno.serve(app.fetch);