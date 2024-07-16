import { Timestamp } from 'firebase/firestore';

export interface Promotion {
  id?: string; // Unique identifier for the promotion
  promotion_name: string; // Name of the promotion
  discount_percentage?: number; // Discount percentage
  discount_amount?: number; // Discount amount (optional)
  category: string; // Category of the promotion
  start_date: Timestamp; // Start date of the promotion
  end_date: Timestamp; // End date of the promotion
  promo_code?: string; // Discount code (optional)
  description?: string; // Description of the promotion
  terms_and_conditions: string[]; // Terms and conditions of the promotion
  excluded_products?: string[]; // Products excluded from the promotion (optional)
  minimum_quantity?: number; // Minimum quantity to get the discount (optional)
  product_limit?: number; // Maximum number of products the discount can be applied to
  usage_limit?: number; // Maximum number of uses of the discount code (optional)
  customer_eligibility?: string[]; // Customer eligibility criteria (optional)
  applicable_regions?: string[]; // Regions where the promotion is applicable (optional)
  max_discount_amount?: number; // Maximum discount amount (optional)
  requires_account?: boolean; // Whether the customer needs to have an account (optional)
  free_shipping?: boolean; // Whether the promotion includes free shipping (optional)
  priority_level?: number; // Priority level of the promotion (optional, for sorting)
  is_exclusive: boolean; // Whether the promotion is exclusive
  combinable: boolean; // Whether the promotion can be combined with other promotions
  usage_count?: number; // Number of times the promotion has been used
  max_usage?: number; // Maximum number of times the promotion can be used
  created_at: Timestamp; // Timestamp when the promotion was created
  updated_at: Timestamp; // Timestamp when the promotion was last updated
}

// Example implementation of a promotion
const black_friday_promo: Promotion = {
  promotion_name: 'Black Friday Sale',
  discount_percentage: 30,
  category: 'All Products',
  start_date: Timestamp.fromDate(new Date('2024-11-29')),
  end_date: Timestamp.fromDate(new Date('2024-12-02')),
  promo_code: 'BLACKFRIDAY30',
  description: 'Incredible discounts on all products during Black Friday!',
  terms_and_conditions: [
    'Valid only for online purchases',
    'Cannot be combined with other promotions',
    'Discount applies to order total before shipping costs',
  ],
  excluded_products: ['Gift Cards', 'Services'],
  minimum_quantity: 1,
  product_limit: 10,
  usage_limit: 1000,
  customer_eligibility: ['Registered Customers', 'Newsletter Subscribers'],
  applicable_regions: ['US', 'Canada'],
  max_discount_amount: 50, // Maximum discount of $50
  requires_account: true, // Customers must have an account
  free_shipping: true, // Free shipping included
  priority_level: 1, // High priority promotion
  is_exclusive: false, // Not exclusive
  combinable: false, // Not combinable with other promotions
  usage_count: 0,
  max_usage: 1000,
  created_at: Timestamp.fromDate(new Date('2024-01-01')),
  updated_at: Timestamp.fromDate(new Date('2024-01-01')),
};
