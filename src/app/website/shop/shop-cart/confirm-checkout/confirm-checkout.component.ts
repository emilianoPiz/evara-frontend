import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule], // Aggiungi FormsModule agli imports
  selector: 'app-confirm-checkout',
  templateUrl: './confirm-checkout.component.html',
  styleUrls: ['./confirm-checkout.component.scss'],
})
export class ConfirmCheckoutComponent {
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
