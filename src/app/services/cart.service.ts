import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cart = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cart.asObservable();

  constructor() {}

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

  // Get cart total
  getCartTotal() {
    return this.cartItems.reduce((total, item) => total + item.total, 0);
  }
}
