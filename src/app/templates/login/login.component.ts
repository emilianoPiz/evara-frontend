import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/firebase-related-services/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}
  async login(event: Event) {
    event.preventDefault();
    try {
      const user = await this.authService.login(this.email, this.password);
    } catch (error) {
      console.log(error);
    }
  }
}
