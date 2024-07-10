
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./website/hero/hero.component').then(m => m.HeroComponent)
  },
  {
    path: 'evara-shop',
    loadComponent: () => import('./website/shop/shop.component').then(m => m.ShopComponent)
  },
  {
    path: 'evara-retreat',
    loadComponent: () => import('./website/retreat/retreat.component').then(m => m.RetreatComponent)
  },
];


