import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../models/cart-item.model';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-shop-cart',
  standalone: true,
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.scss'],
  imports: [CurrencyPipe, CommonModule],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  cartTotal = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cart$.subscribe((items) => {
      this.cartItems = items;
      this.cartTotal = this.cartService.getCartTotal();
    });
  }

  removeItem(productId: string) {
    this.cartService.removeFromCart(productId);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  buyItems() {
    console.log('products sold', this.cartItems);
    console.log('invoice sent');
  }
}
