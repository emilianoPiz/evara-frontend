import { Injectable } from '@angular/core';
import { Promotion } from '../models/promotion.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class DiscountService {
  applyPromotion(product: Product, promotion: Promotion): Product {
    const now = new Date();
    const startDate = promotion.start_date.toDate();
    const endDate = promotion.end_date.toDate();

    if (
      now >= startDate &&
      now <= endDate &&
      this.isProductEligible(product, promotion)
    ) {
      let discountedPrice = product.price;

      if (promotion.discount_percentage) {
        discountedPrice =
          discountedPrice * (1 - promotion.discount_percentage / 100);
      }

      if (promotion.discount_amount) {
        discountedPrice = discountedPrice - promotion.discount_amount;
      }

      if (promotion.max_discount_amount) {
        discountedPrice = Math.min(
          discountedPrice,
          promotion.max_discount_amount
        );
      }

      return { ...product, price: discountedPrice };
    }

    return product;
  }

  private isProductEligible(product: Product, promotion: Promotion): boolean {
    if (promotion.excluded_products?.includes(product.id)) {
      return false;
    }

    if (promotion.category !== product.category) {
      return false;
    }

    // Add more eligibility checks as needed
    return true;
  }
}
