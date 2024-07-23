import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item.model';
import { DiscountService } from './discount.service';
import { Promotion } from '../models/promotion.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cart = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cart.asObservable();

  constructor(private discountService: DiscountService) {}

  // Add item to the cart
  addToCart(item: CartItem) {
    const existingItem = this.cartItems.find(
      (i) => i.product_id === item.product_id
    );
    if (existingItem) {
      existingItem.quantity += item.quantity;
      existingItem.total = existingItem.quantity * existingItem.price;
    } else {
      item.total = item.quantity * item.price;
      this.cartItems.push(item);
    }
    this.updateCart();
  }

  // Remove item from the cart
  removeFromCart(product_id: string) {
    this.cartItems = this.cartItems.filter(
      (item) => item.product_id !== product_id
    );
    this.updateCart();
  }

  // Clear the cart
  clearCart() {
    this.cartItems = [];
    this.updateCart();
  }

  // Update the cart
  private updateCart() {
    this.cart.next([...this.cartItems]);
  }

  // Get cart total before promotions
  getCartTotal() {
    return this.cartItems.reduce((total, item) => total + item.total, 0);
  }

  // Apply promotions at checkout
  applyPromotionCode(promotion: Promotion) {
    const cartItemsCopy = [...this.cartItems];
    cartItemsCopy.forEach((item, index) => {
      let updatedItem = { ...item };
      updatedItem = this.discountService.applyPromotion(updatedItem, promotion);
      cartItemsCopy[index] = updatedItem;
    });

    this.cartItems = cartItemsCopy;
    this.updateCart();
  }

  getCartItems() {
    return this.cartItems;
  }
}
