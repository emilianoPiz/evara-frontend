import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-confirm-checkout',
  templateUrl: './confirm-checkout.component.html',
  styleUrls: ['./confirm-checkout.component.scss'],
})
export class ConfirmCheckoutComponent {
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
