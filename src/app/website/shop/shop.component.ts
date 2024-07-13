import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [RouterModule],
  template: `<div class="main-shop-container">
    <router-outlet></router-outlet>
  </div> `,
  styles: ``,
})
export class ShopComponent {
  constructor() {}
}
