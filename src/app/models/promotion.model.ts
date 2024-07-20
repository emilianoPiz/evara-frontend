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
