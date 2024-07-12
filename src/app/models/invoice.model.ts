import { Timestamp } from 'firebase/firestore';

export interface Invoice {
  id?: string;
  userId: string;
  orderId: string;
  items: InvoiceItem[];
  totalAmount: number;
  discountAmount?: number;
  taxAmount: number;
  finalAmount: number;
  issueDate: Timestamp;
  dueDate: Timestamp;
  status: 'paid' | 'unpaid' | 'cancelled';
  created_at: Timestamp;
  updated_at: Timestamp;
}

export interface InvoiceItem {
  productId: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}
