import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/firebase-related-services/auth.service';
import { Timestamp } from 'firebase/firestore';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'app-shop-profile',
  templateUrl: './shop-profile.component.html',
  styleUrls: ['./shop-profile.component.scss'],
  imports: [MatCard, MatCardContent, CommonModule],
})
export class ProfileComponent implements OnInit {
  name: string | null = '';
  surname?: string = '';
  dateOfBirth: Date | null = null;
  email: string | null = '';
  password: string = '********';
  birth_date: Timestamp | undefined | null;
  wallet = {
    balance: 0.0,
    paymentMethods: [],
  };

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.user$.subscribe(async (firebaseUser) => {
      if (firebaseUser) {
        const userData = await this.authService.getUserData(firebaseUser.uid);
        if (userData) {
          this.name = userData.email;
          this.email = userData.email;
          // this.birth_date = userData.uid;

          // if (userData.wallet) {
          //   this.wallet = userData.wallet;
          // }
        }
      }
    });
  }

  changePassword() {
    // TODO: Implement password change logic here
    console.log('Change password functionality not implemented yet.');
  }
}
