// contact-us.model.ts
export interface ContactUs {
  name: string;
  email: string;
  message: string;
  phone: string;
  subject: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  gender: 'Male' | 'Female' | 'Other';
  age: number;
}
