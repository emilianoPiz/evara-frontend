import { Component } from '@angular/core';
import { AuthService } from '../../services/firebase-related-services/auth.service';
import { FormsModule } from '@angular/forms';
import { USER_ROLES } from '../../models/roles';
import { MatFormField, MatLabel } from '@angular/material/form-field';
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
    FormsModule,
    MatFormField,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    MatLabel,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  email: string = '';
  password: string = '';
  role: string = USER_ROLES[1];

  constructor(private authService: AuthService) {}
  async signUp(event: Event) {
    event.preventDefault();

    try {
      const user = await this.authService.signUp(
        this.email,
        this.password,
        this.role
      );
      console.log('User created: ', user);
    } catch (error) {
      console.error('Error creating user: ', error);
    }
  }
}
