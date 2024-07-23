import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { Promotion } from '../models/promotion.model';

@Injectable({
  providedIn: 'root',
})
export class DiscountService {
  constructor() {}

  applyPromotion(cartItem: CartItem, promotion: Promotion): CartItem {
    console.log('Applying promotion:', promotion);
    console.log('Initial cart item:', cartItem);

    // Ensure total is set initially
    cartItem.price = cartItem.price * cartItem.quantity;

    // Apply percentage discount if applicable
    if (promotion.discount_percentage) {
      const discount = (cartItem.price * promotion.discount_percentage) / 100;
      console.log(`Applying percentage discount: ${discount}`);
      cartItem.total -= discount;
    }

    // Apply fixed discount if applicable
    if (promotion.discount_amount) {
      console.log(
        `Applying fixed discount amount: ${promotion.discount_amount}`
      );
      cartItem.price -= promotion.discount_amount;
    }

    // Ensure the total is not negative
    if (cartItem.total < 0) {
      console.log('Total price is negative, setting it to 0');
      cartItem.total = 0;
    }

    console.log('Final cart item:', cartItem);
    return cartItem;
  }
}
