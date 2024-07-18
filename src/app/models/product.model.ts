import { Timestamp } from 'firebase/firestore';

export interface Product {
  id: string;
  provider: string;
  name: string;
  colors: string[];
  category: string;
  quantity: number;
  arrivalTime: string;
  brand: string;
  origin: string;
  quality: string;
  material: string;
  description: string;
  promotion: string;
  price: number;
  tag: string;
  status:
    | 'active'
    | 'inactive'
    | 'available'
    | 'unavailable'
    | 'coming soon'
    | 'preorder';
  created_at: Timestamp;
  updated_at: Timestamp;
  path_to_image: string;
  warehouse: string;
  border_price: number;
}
