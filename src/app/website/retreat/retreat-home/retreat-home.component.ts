import { Component } from '@angular/core';
import { NavbarComponent } from '../../../templates/navbar/navbar.component';

@Component({
  selector: 'app-retreat-home',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './retreat-home.component.html',
  styleUrl: './retreat-home.component.scss',
})
export class RetreatHomeComponent {}
