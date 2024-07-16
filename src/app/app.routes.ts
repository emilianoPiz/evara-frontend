import { Routes } from '@angular/router';
import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/login']);

export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./website/hero/hero.component').then((m) => m.HeroComponent),
  },
  {
    path: 'signup',

    loadComponent: () =>
      import('./templates/signup/signup.component').then(
        (m) => m.SignupComponent
      ),
  },
  {
    path: 'login',

    loadComponent: () =>
      import('./templates/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'shop',
    loadComponent: () =>
      import('./website/shop/shop.component').then((m) => m.ShopComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./website/shop/shop-home/shop-home.component').then(
            (m) => m.ShopHomeComponent
          ),

        children: [
          {
            path: 'cart',
            loadComponent: () =>
              import('./website/shop/shop-cart/shop-cart.component').then(
                (m) => m.CartComponent
              ),
          },
          {
            path: 'profile',
            loadComponent: () =>
              import('./website/shop/shop-profile/shop-profile.component').then(
                (m) => m.ProfileComponent
              ),
            canActivate: [AuthGuard],
          },
        ],
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
        path: '',
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
        canActivate: [AuthGuard],
      },
    ],
  },
];
