import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../models/cart-item.model';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ConfirmCheckoutComponent } from './confirm-checkout/confirm-checkout.component';

@Component({
  selector: 'app-shop-cart',
  standalone: true,
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.scss'],
  imports: [CurrencyPipe, CommonModule, ConfirmCheckoutComponent, RouterModule],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  cartTotal = 0;
  showModal = false;

  constructor(private cartService: CartService, private router: Router) {}

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

  DoConfirmCheckout() {
    this.showModal = true;
  }

  onModalConfirm(event: {
    hasPromotion: boolean;
    wantsToLogin: boolean;
    promotionCode: string;
  }) {
    this.showModal = false;
    console.log('Promotion Code:', event.promotionCode);
    console.log('Wants to Login:', event.wantsToLogin);
    if (event.wantsToLogin) {
      // Redirect to login
      this.router.navigate(['/login']);
    } else {
      // Proceed to checkout
      this.router.navigate(['/shop/cart/check-out']);
    }
  }
}
