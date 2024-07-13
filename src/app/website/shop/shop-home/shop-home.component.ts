import { Component } from '@angular/core';
import { NavbarComponent } from '../../../templates/navbar/navbar.component';

@Component({
  selector: 'app-shop-home',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './shop-home.component.html',
  styleUrl: './shop-home.component.scss',
})
export class ShopHomeComponent {}
