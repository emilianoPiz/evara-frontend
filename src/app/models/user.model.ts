import { Timestamp } from 'firebase/firestore';

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  created_at: Timestamp;
  updated_at: Timestamp;
  date_of_birth?: Timestamp;
  wallet?: {
    balance: number;
    payment_methods: {
      type: string;
      lastFour: string;
    }[];
  };
}
