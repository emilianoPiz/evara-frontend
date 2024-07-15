import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'app-profile',
  templateUrl: './shop-profile.component.html',
  styleUrls: ['./shop-profile.component.scss'],
  imports: [MatCard, MatCardContent, CommonModule],
})
export class ProfileComponent {
  name: string = 'John';
  surname: string = 'Doe';
  dateOfBirth: Date = new Date(1990, 1, 1);
  email: string = 'john.doe@example.com';
  password: string = '********';
  wallet = {
    balance: 100.0,
    paymentMethods: [
      { type: 'Visa', lastFour: '1234' },
      { type: 'Mastercard', lastFour: '5678' },
    ],
  };

  changePassword() {
    // TODO: Implement password change logic here
    console.log('Change password functionality not implemented yet.');
  }
}
