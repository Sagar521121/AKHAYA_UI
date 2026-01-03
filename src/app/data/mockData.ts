// Mock Data Structure for AKHAYA E-commerce

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  category: string;
  region: string;
  images: string[];
  artisan?: string;
  materials: string[];
  dimensions?: string;
  weight?: string;
  inStock: boolean;
  stockCount: number;
  rating: number;
  reviewCount: number;
  featured?: boolean;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  productCount: number;
}

export interface Review {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

// Mock Products
export const mockProducts: Product[] = [
  {
    id: 'prod-001',
    title: 'Pashmina Shawl',
    description: 'Luxurious handwoven Pashmina shawl crafted by master artisans in Kashmir. Made from the finest cashmere wool, this exquisite piece showcases traditional craftsmanship passed down through generations.',
    price: 12500,
    originalPrice: 15000,
    discount: 17,
    category: 'Textiles & Fabrics',
    region: 'Jammu Kashmir',
    images: [
      'https://images.unsplash.com/photo-1510574457807-3d9bf494ff6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXNobWluYSUyMHNoYXdsfGVufDF8fHx8MTc2NjY0NjUxNHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800',
      'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800'
    ],
    artisan: 'Mohammad Sheikh',
    materials: ['100% Pure Cashmere', 'Natural Dyes'],
    dimensions: '200cm x 100cm',
    weight: '250g',
    inStock: true,
    stockCount: 12,
    rating: 4.8,
    reviewCount: 45,
    featured: true,
    tags: ['luxury', 'handwoven', 'winter', 'traditional']
  },
  {
    id: 'prod-002',
    title: 'Kalamkari Silk Saree',
    description: 'Elegant Kalamkari hand-painted silk saree featuring intricate floral and mythological motifs. Each piece is a unique work of art created using traditional block printing techniques.',
    price: 8500,
    originalPrice: 10000,
    discount: 15,
    category: 'Textiles & Fabrics',
    region: 'Andhra Pradesh',
    images: [
      'https://images.unsplash.com/photo-1762173886363-de541417e48e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYWxhbWthcmklMjBmYWJyaWN8ZW58MXx8fHwxNzY2NjQ2NTE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800',
      'https://images.unsplash.com/photo-1583391733981-9c93f9c77c94?w=800'
    ],
    artisan: 'Lakshmi Devi',
    materials: ['Pure Silk', 'Natural Vegetable Dyes', 'Hand Block Printing'],
    dimensions: '6.5m x 1.2m (with blouse)',
    inStock: true,
    stockCount: 8,
    rating: 4.9,
    reviewCount: 32,
    featured: true,
    tags: ['silk', 'handpainted', 'traditional', 'saree']
  },
  {
    id: 'prod-003',
    title: 'Rogan Art Wall Hanging',
    description: 'Mesmerizing Rogan art wall hanging featuring the ancient art of cloth painting. Created with castor oil-based colors, this piece represents centuries-old tradition from Gujarat.',
    price: 4200,
    category: 'Home Decor',
    region: 'Gujarat',
    images: [
      'https://images.unsplash.com/photo-1698581075105-924b6c70b5d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0ZXh0aWxlJTIwYXJ0fGVufDF8fHx8MTc2NjY0NjUxNXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1582582494217-8f876d4f1ec5?w=800'
    ],
    artisan: 'Abdul Gafur Khatri',
    materials: ['Cotton Fabric', 'Castor Oil Paint', 'Natural Pigments'],
    dimensions: '90cm x 60cm',
    inStock: true,
    stockCount: 15,
    rating: 4.7,
    reviewCount: 28,
    featured: false,
    tags: ['art', 'wallhanging', 'traditional', 'handpainted']
  },
  {
    id: 'prod-004',
    title: 'Mysore Silk Saree',
    description: 'Premium Mysore silk saree with rich gold zari work. Renowned for its fine texture and lustrous finish, this saree embodies Karnataka\'s silk weaving heritage.',
    price: 18000,
    originalPrice: 22000,
    discount: 18,
    category: 'Textiles & Fabrics',
    region: 'Karnataka',
    images: [
      'https://images.unsplash.com/photo-1641699862936-be9f49b1c38d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwc2FyZWV8ZW58MXx8fHwxNzY2NjQ2NTE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800'
    ],
    artisan: 'Srinivas Reddy',
    materials: ['Pure Mysore Silk', 'Gold Zari', 'Natural Dyes'],
    dimensions: '6.5m x 1.2m',
    inStock: true,
    stockCount: 5,
    rating: 5.0,
    reviewCount: 56,
    featured: true,
    tags: ['luxury', 'silk', 'zari', 'wedding']
  },
  {
    id: 'prod-005',
    title: 'Kolhapuri Chappal',
    description: 'Authentic handcrafted Kolhapuri chappals made from premium leather. These traditional sandals feature intricate hand-stitching and are known for their durability and comfort.',
    price: 1800,
    category: 'Footwear',
    region: 'Kolhapur',
    images: [
      'https://images.unsplash.com/photo-1765961999112-7aea89449b62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb2xoYXB1cmklMjBjaGFwcGFsfGVufDF8fHx8MTc2NjY0NjUxNXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800'
    ],
    artisan: 'Ramesh Pawar',
    materials: ['Premium Leather', 'Hand-stitched', 'Natural Tanning'],
    inStock: true,
    stockCount: 25,
    rating: 4.6,
    reviewCount: 89,
    featured: false,
    tags: ['footwear', 'leather', 'traditional', 'handmade']
  },
  {
    id: 'prod-006',
    title: 'Mirzapur Handknotted Carpet',
    description: 'Exquisite hand-knotted carpet from Mirzapur featuring Persian-inspired patterns. Each knot tied by skilled artisans, creating a masterpiece that lasts generations.',
    price: 45000,
    originalPrice: 55000,
    discount: 18,
    category: 'Home Decor',
    region: 'Mirzapur',
    images: [
      'https://images.unsplash.com/photo-1753100410452-ba4b5426908a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjYXJwZXR8ZW58MXx8fHwxNzY2NjQ2NTE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1600166898405-da9535204843?w=800'
    ],
    artisan: 'Salim Ansari',
    materials: ['100% Wool', 'Hand-knotted', 'Natural Dyes'],
    dimensions: '180cm x 270cm',
    weight: '15kg',
    inStock: true,
    stockCount: 3,
    rating: 4.9,
    reviewCount: 23,
    featured: true,
    tags: ['carpet', 'luxury', 'handknotted', 'homedecor']
  },
  {
    id: 'prod-007',
    title: 'Artisan Stoneware Vase',
    description: 'Handcrafted stoneware vase featuring organic textures and earthy glazes. Perfect for adding an artisanal touch to any space.',
    price: 3500,
    category: 'Pottery & Ceramics',
    region: 'Jaipur',
    images: [
      'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800',
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800',
      'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800'
    ],
    artisan: 'Rajesh Kumar',
    materials: ['Stoneware Clay', 'Natural Glaze'],
    dimensions: '25cm height x 15cm diameter',
    weight: '1.2kg',
    inStock: true,
    stockCount: 18,
    rating: 4.5,
    reviewCount: 42,
    featured: false,
    tags: ['pottery', 'ceramic', 'vase', 'homedecor']
  },
  {
    id: 'prod-008',
    title: 'Terracotta Tea Set',
    description: 'Traditional terracotta tea set including teapot and 4 cups. Handcrafted using age-old pottery techniques, perfect for brewing aromatic chai.',
    price: 1200,
    category: 'Pottery & Ceramics',
    region: 'West Bengal',
    images: [
      'https://images.unsplash.com/photo-1600788907416-456578634209?w=800',
      'https://images.unsplash.com/photo-1556908153-2a972e0e9f84?w=800'
    ],
    artisan: 'Gopal Das',
    materials: ['Terracotta Clay', 'Natural Finish'],
    inStock: true,
    stockCount: 30,
    rating: 4.4,
    reviewCount: 67,
    featured: false,
    tags: ['pottery', 'terracotta', 'kitchenware', 'traditional']
  }
];

// Mock Categories
export const mockCategories: Category[] = [
  {
    id: 'cat-001',
    name: 'Textiles & Fabrics',
    slug: 'textiles-fabrics',
    image: 'https://images.unsplash.com/photo-1762764214015-d5c22646465b?w=800',
    description: 'Handwoven textiles, silk sarees, and traditional fabrics',
    productCount: 45
  },
  {
    id: 'cat-002',
    name: 'Home Decor',
    slug: 'home-decor',
    image: 'https://images.unsplash.com/photo-1627811373475-0b468b06d620?w=800',
    description: 'Traditional & modern home decor pieces',
    productCount: 32
  },
  {
    id: 'cat-003',
    name: 'Pottery & Ceramics',
    slug: 'pottery-ceramics',
    image: 'https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?w=800',
    description: 'Artisan crafted pottery and ceramic pieces',
    productCount: 28
  },
  {
    id: 'cat-004',
    name: 'Jewelry & Accessories',
    slug: 'jewelry-accessories',
    image: 'https://images.unsplash.com/photo-1760786933663-327c858d5434?w=800',
    description: 'Handcrafted ornaments and accessories',
    productCount: 56
  },
  {
    id: 'cat-005',
    name: 'Footwear',
    slug: 'footwear',
    image: 'https://images.unsplash.com/photo-1670776955198-9055d8e631a7?w=800',
    description: 'Traditional handmade footwear',
    productCount: 18
  },
  {
    id: 'cat-006',
    name: 'Bags & Leather',
    slug: 'bags-leather',
    image: 'https://images.unsplash.com/photo-1647540945262-7da3bd1a3d96?w=800',
    description: 'Handcrafted leather goods and bags',
    productCount: 24
  }
];

// Mock API Functions
export const api = {
  // Products
  getProducts: async (filters?: {
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    region?: string;
    search?: string;
  }): Promise<Product[]> => {
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API delay
    
    let filtered = [...mockProducts];
    
    if (filters?.category) {
      filtered = filtered.filter(p => p.category === filters.category);
    }
    if (filters?.minPrice) {
      filtered = filtered.filter(p => p.price >= filters.minPrice!);
    }
    if (filters?.maxPrice) {
      filtered = filtered.filter(p => p.price <= filters.maxPrice!);
    }
    if (filters?.region) {
      filtered = filtered.filter(p => p.region === filters.region);
    }
    if (filters?.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower) ||
        p.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }
    
    return filtered;
  },
  
  getProductById: async (id: string): Promise<Product | null> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockProducts.find(p => p.id === id) || null;
  },
  
  getFeaturedProducts: async (): Promise<Product[]> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockProducts.filter(p => p.featured);
  },
  
  // Categories
  getCategories: async (): Promise<Category[]> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockCategories;
  },
  
  getCategoryBySlug: async (slug: string): Promise<Category | null> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockCategories.find(c => c.slug === slug) || null;
  }
};
