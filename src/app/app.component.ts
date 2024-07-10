import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShopComponent } from "./website/shop/shop.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'evara-frontend';
}
