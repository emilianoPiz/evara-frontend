import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../models/cart-item.model';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { ConfirmCheckoutComponent } from './confirm-checkout/confirm-checkout.component';
import { AuthService } from '../../../services/firebase-related-services/auth.service';
import { PromotionService } from '../../../services/promotion.service';
import { Promotion } from '../../../models/promotion.model';

@Component({
  selector: 'app-shop-cart',
  standalone: true,
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.scss'],
  imports: [CurrencyPipe, CommonModule, ConfirmCheckoutComponent],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  cartTotal = 0;
  showModal = false;
  isUserLoggedIn = false;
  errorMessage: string | null = null;

  constructor(
    private cartService: CartService,
    private router: Router,
    private authService: AuthService,
    private promotionService: PromotionService
  ) {}

  ngOnInit() {
    this.cartService.cart$.subscribe((items) => {
      this.cartItems = items;
      this.cartTotal = this.cartService.getCartTotal();
    });
    this.isUserLoggedIn = this.authService.isLoggedIn();
  }

  removeItem(productId: string) {
    this.cartService.removeFromCart(productId);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  doConfirmCheckout() {
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
    if (event.wantsToLogin && !this.isUserLoggedIn) {
      // Redirect to login
      this.router.navigate(['/login']);
    } else {
      if (event.hasPromotion) {
        this.promotionService
          .validatePromotionCode(event.promotionCode)
          .subscribe((promotion) => {
            if (promotion) {
              this.cartService.applyPromotionCode(promotion);
              // Proceed to checkout
              this.router.navigate(['/shop/check-out']);
            } else {
              this.errorMessage = 'Invalid promotion code';
            }
          });
      } else {
        // Proceed to checkout
        this.router.navigate(['/shop/check-out']);
      }
    }
  }
}
