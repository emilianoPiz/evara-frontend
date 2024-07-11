import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./website/hero/hero.component').then((m) => m.HeroComponent),
  },
  {
    path: 'shop',
    loadComponent: () =>
      import('./website/shop/shop.component').then((m) => m.ShopComponent),
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./website/shop/shop-home/shop-home.component').then(
            (m) => m.ShopHomeComponent
          ),
      },
    ],
  },
  {
    path: 'retreat',
    loadComponent: () =>
      import('./website/retreat/retreat.component').then(
        (m) => m.RetreatComponent
      ),
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./website/retreat/retreat-home/retreat-home.component').then(
            (m) => m.RetreatHomeComponent
          ),
      },
    ],
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./admin/admin.component').then((m) => m.AdminComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./admin/back-office/back-office.component').then(
            (m) => m.BackOfficeComponent
          ),
      },
    ],
  },
];
