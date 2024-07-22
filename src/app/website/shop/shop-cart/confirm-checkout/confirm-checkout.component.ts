import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-confirm-checkout',
  templateUrl: './confirm-checkout.component.html',
  styleUrls: ['./confirm-checkout.component.scss'],
})
export class ConfirmCheckoutCOmponent {
  @Input() isUserLoggedIn: boolean = false;
  promotionCode: string = '';
  @Output() confirm = new EventEmitter<{
    hasPromotion: boolean;
    wantsToLogin: boolean;
    promotionCode: string;
  }>();

  onConfirm(hasPromotion: boolean, wantsToLogin: boolean) {
    this.confirm.emit({
      hasPromotion,
      wantsToLogin,
      promotionCode: this.promotionCode,
    });
  }
}
