import { projectId, publicAnonKey } from '../../../utils/supabase/info';

const API_BASE = `https://${projectId}.supabase.co/functions/v1/make-server-b8aa36f4`;

// Get auth token from localStorage
const getAuthToken = (): string | null => {
  return localStorage.getItem('auth_token');
};

// Make authenticated API request
async function apiRequest(endpoint: string, options: RequestInit = {}) {
  const token = getAuthToken();
  
  console.log(`Making API request to: ${endpoint}`);
  console.log(`Auth token present: ${!!token}`);
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token || publicAnonKey}`,
    ...options.headers,
  };

  const response = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Request failed' }));
    console.error(`API Error (${response.status}):`, error);
    throw new Error(error.error || `HTTP error! status: ${response.status}`);
  }

  return response.json();
}

// ==================== AUTH API ====================

export const authApi = {
  async signup(email: string, password: string, name: string) {
    const data = await apiRequest('/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password, name }),
    });
    
    // Sign in automatically after signup
    return this.signin(email, password);
  },

  async signin(email: string, password: string) {
    const data = await apiRequest('/auth/signin', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    
    // Store token in localStorage
    if (data.access_token) {
      localStorage.setItem('auth_token', data.access_token);
      localStorage.setItem('user', JSON.stringify(data.user));
    }
    
    return data;
  },

  async getUser() {
    try {
      const data = await apiRequest('/auth/user');
      return data.user;
    } catch (error) {
      // If unauthorized, clear local storage
      this.signout();
      return null;
    }
  },

  signout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
  },

  getCurrentUser() {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },

  isAuthenticated() {
    return !!getAuthToken();
  }
};

// ==================== PRODUCTS API ====================

export const productsApi = {
  async getAll() {
    const data = await apiRequest('/products');
    return data.products;
  },

  async getByCategory(category: string) {
    const data = await apiRequest(`/products/category/${category}`);
    return data.products;
  },

  async getById(id: string) {
    const data = await apiRequest(`/products/${id}`);
    return data.product;
  },

  async create(product: any) {
    const data = await apiRequest('/products', {
      method: 'POST',
      body: JSON.stringify(product),
    });
    return data.product;
  }
};

// ==================== CART API ====================

export const cartApi = {
  async get() {
    try {
      const data = await apiRequest('/cart');
      return data.cart;
    } catch (error) {
      console.error('Error fetching cart:', error);
      return { items: [] };
    }
  },

  async addItem(productId: string, quantity: number = 1, variant?: any) {
    const data = await apiRequest('/cart/items', {
      method: 'POST',
      body: JSON.stringify({ productId, quantity, variant }),
    });
    return data.cart;
  },

  async updateQuantity(productId: string, quantity: number) {
    const data = await apiRequest(`/cart/items/${productId}`, {
      method: 'PUT',
      body: JSON.stringify({ quantity }),
    });
    return data.cart;
  },

  async removeItem(productId: string) {
    const data = await apiRequest(`/cart/items/${productId}`, {
      method: 'DELETE',
    });
    return data.cart;
  },

  async clear() {
    const data = await apiRequest('/cart', {
      method: 'DELETE',
    });
    return data.cart;
  }
};

// ==================== ORDERS API ====================

export const ordersApi = {
  async create(orderData: any) {
    const data = await apiRequest('/orders', {
      method: 'POST',
      body: JSON.stringify(orderData),
    });
    return data.order;
  },

  async getAll() {
    const data = await apiRequest('/orders');
    return data.orders;
  },

  async getById(id: string) {
    const data = await apiRequest(`/orders/${id}`);
    return data.order;
  }
};

// ==================== SEED DATA ====================

export const seedApi = {
  async seedDatabase() {
    const data = await apiRequest('/seed', {
      method: 'POST',
    });
    return data;
  }
};