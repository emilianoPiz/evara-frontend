export interface CartItem {
  product_id: string;
  product_name?: string;
  quantity: number;
  price: number;
  total: number;
  promotion_name?: string;
  promotion_code?: string;
}
