import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CartService } from '../../../../services/cart.service';
import { CartItem } from '../../../../models/cart-item.model';

@Component({
  selector: 'app-check-out',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent implements OnInit {
  cartItems: CartItem[] = [];
  cartTotal = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.cartTotal = this.cartService.getCartTotal();
  }

  confirmPurchase() {
    // Logica per confermare l'acquisto
    alert('Purchase confirmed!');
    this.cartService.clearCart();
    this.router.navigate(['/']);
  }
}
