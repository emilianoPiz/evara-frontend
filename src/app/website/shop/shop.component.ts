import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [RouterModule],
  template: `<div class="main container">
    <p><a routerLink="/shop/home">to home</a></p>
    <router-outlet></router-outlet>
  </div> `,
  styleUrl: './shop.component.scss',
})
export class ShopComponent {
  constructor() {}
}
