export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  categories: Category[];
  brand: string;
  reviews: Review[];
  rating: number;
  stock: number;
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  parentId?: string;
  children?: Category[];
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}