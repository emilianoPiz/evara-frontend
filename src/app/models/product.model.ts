import { Timestamp } from 'firebase/firestore';

export interface Product {
  id?: string;
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
  status:
    | 'active'
    | 'inactive'
    | 'avalailable'
    | 'unavailable'
    | 'coming soon'
    | 'preorder';
  created_at: Timestamp;
  updated_at: Timestamp;
  path_to_imagae: string;
}
