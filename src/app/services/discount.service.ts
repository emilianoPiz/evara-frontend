import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { Promotion } from '../models/promotion.model';

@Injectable({
  providedIn: 'root',
})
export class DiscountService {
  applyPromotion(cartItem: CartItem, promotion: Promotion): CartItem {
    // Logica per applicare la promozione
    // Esempio: applicare uno sconto in percentuale
    if (promotion.discount_percentage) {
      const discount = (cartItem.price * promotion.discount_percentage) / 100;
      cartItem.total -= discount;
    }
    // Esempio: applicare uno sconto fisso
    if (promotion.discount_amount) {
      cartItem.total -= promotion.discount_amount;
    }
    return cartItem;
  }
}
