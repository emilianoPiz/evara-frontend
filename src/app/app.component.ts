import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShopComponent } from "./website/shop/shop.component";
import { HeroComponent } from './website/hero/hero.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShopComponent, HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'evara-frontend';
}
