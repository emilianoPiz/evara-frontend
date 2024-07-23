import { Component } from '@angular/core';
import { AuthService } from '../../services/firebase-related-services/auth.service';
import { FormsModule } from '@angular/forms';
import { USER_ROLES } from '../../models/roles';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
} from '@angular/animations';

import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-signup',
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        animate(
          '1s ease-in-out',
          keyframes([
            style({ opacity: 0, transform: 'translateY(-100px)', offset: 0 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ])
        ),
      ]),
    ]),
  ],
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    MatFormField,
    MatInput,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    MatLabel,
    MatButtonModule,
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  email: string = '';
  password: string = '';
  role: string = USER_ROLES[1];
  name: string = '';
  phoneNumber: string = '';
  address: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  async signUp(event: Event) {
    event.preventDefault();
    this.errorMessage = '';

    try {
      const user = await this.authService.signUp(
        (this.email = this.email),
        (this.password = this.password),
        (this.role = this.role),
        (this.name = this.name),
        (this.phoneNumber = this.phoneNumber),
        (this.address = this.address)
      );
      console.log('User created: ', user);
    } catch (error) {
      // this.errorMessage = 'Error creating user: ' + error.message;
      console.error('Error creating user: ', error);
    }
  }
}
