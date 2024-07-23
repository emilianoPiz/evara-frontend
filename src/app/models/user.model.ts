import { Timestamp } from 'firebase/firestore';

// Define the interface for a payment method
export interface PaymentMethod {
  type: string;
  lastFour: string;
}

// Define the interface for a wallet
export interface Wallet {
  balance: number;
  payment_methods: PaymentMethod[];
}

// Define the interface for an address
export interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

// Define the main User interface
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  created_at: Timestamp;
  updated_at: Timestamp;
  date_of_birth?: Timestamp;
  phone_number?: string;
  gender?: 'male' | 'female' | 'other';
  addresses?: Address[];
  wallet?: Wallet;
  is_active: boolean;
  preferences?: {
    currency: string;
    language: string;
    notifications: {
      email: boolean;
      sms: boolean;
      push: boolean;
    };
  };
  order_history?: {
    order_id: string;
    order_date: Timestamp;
    order_amount: number;
  }[];
  wishlist?: string[]; // array of product IDs
  reviews?: {
    product_id: string;
    review_id: string;
    rating: number;
    comment: string;
    review_date: Timestamp;
  }[];
}
