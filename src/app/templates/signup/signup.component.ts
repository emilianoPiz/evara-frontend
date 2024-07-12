import { Component } from '@angular/core';
import { AuthService } from '../../services/firebase-related-services/auth.service';
import { FormsModule } from '@angular/forms';
import { USER_ROLES } from '../../models/roles';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
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
