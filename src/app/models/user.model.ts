import { Timestamp } from 'firebase/firestore';

export interface User {
  id?: string;
  name: string;
  email: string;
  role: string;
  created_at: Timestamp;
  updated_at: Timestamp;
  gender?: string;
  nation?: string;
  age?: number;
  birth_date?: Timestamp;
}
