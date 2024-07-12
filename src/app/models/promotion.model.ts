import { Timestamp } from 'firebase/firestore';

export interface Promotion {
  id?: string;
  startDate: Timestamp;
  endDate: Timestamp;
  isExclusive: boolean;
  promoCode: string;
  productLimit: number;
  combinable: boolean;
  description?: string;
  discountPercentage?: number;
  discountAmount?: number;
  usageCount?: number;
  maxUsage?: number;
  created_at: Timestamp;
  updated_at: Timestamp;
}
