import { Injectable } from '@angular/core';
import { Promotion } from '../models/promotion.model';
import { Product } from '../models/product.model';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root',
})
export class DiscountService {
  applyPromotion(cartItem: CartItem, promotion: Promotion): CartItem {
    const now = new Date();
    const startDate = promotion.start_date.toDate();
    const endDate = promotion.end_date.toDate();

    if (
      now >= startDate &&
      now <= endDate &&
      this.isProductEligible(cartItem, promotion)
    ) {
      let discountedPrice = cartItem.price;

      if (promotion.discount_percentage) {
        discountedPrice *= 1 - promotion.discount_percentage / 100;
      }

      if (promotion.discount_amount) {
        discountedPrice -= promotion.discount_amount;
      }

      if (promotion.max_discount_amount) {
        discountedPrice = Math.min(
          discountedPrice,
          promotion.max_discount_amount
        );
      }

      return {
        ...cartItem,
        price: discountedPrice,
        promotion_name: promotion.promotion_name,
        promotion_code: promotion.promo_code,
      };
    }

    return cartItem;
  }

  private isProductEligible(cartItem: CartItem, promotion: Promotion): boolean {
    const product = this.getProductById(cartItem.product_id); // Assumed to be a method to fetch product details

    if (promotion.excluded_products?.includes(cartItem.product_id)) {
      return false;
    }

    if (promotion.category && promotion.category !== product.category) {
      return false;
    }

    if (
      promotion.minimum_quantity &&
      cartItem.quantity < promotion.minimum_quantity
    ) {
      return false;
    }

    // Add other eligibility checks based on region, requires_account, etc.
    // Assuming you have a method to fetch the user's region and account status

    if (promotion.requires_account && !this.isUserLoggedIn()) {
      return false;
    }

    return true;
  }

  private isUserLoggedIn(): boolean {
    // Implement your logic to check if user is logged in using FireAuth
    return true; // Placeholder implementation
  }

  private getProductById(productId: string): Product {
    // Implement your logic to fetch product details by ID
    return {} as Product; // Placeholder implementation
  }
}
