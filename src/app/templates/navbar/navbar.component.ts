import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatButtonModule,
    NgFor,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    RouterModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Output() menuToggle = new EventEmitter<void>();
  links: any = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    //this is wrapped in an async function becuase otherwise angular will throw the  ng0100 err Expression Changed afterview init
    setTimeout(() => {
      this.updateLinks(this.router.url);
    }, 0);
  }

  private updateLinks(url: string): void {
    if (url.includes('/shop')) {
      this.links = [
        { path: '/shop', label: 'Shop' },
        { path: '/shop/cart', label: 'Cart' },
        { path: '/shop/profile', label: 'Profile' },
        { path: '/login', label: 'Login' },
        { path: '/signup', label: 'Join Us!' },
      ];
    } else if (url.includes('/retreat')) {
      this.links = [
        { path: '/retreat', label: 'Home' },
        { path: '/events', label: 'Retreats' },
        { path: '/book-us', label: 'Book with us!' },
        { path: '/testimonials', label: 'Testimonials' },
      ];
    } else if (url.includes('/admin')) {
      this.links = [
        { path: '/admin', label: 'Dashboard' },
        { path: '/admin/promotions', label: 'Promotions' },
        { path: '/admin/orders', label: 'Orders' },
        { path: '/admin/contact', label: 'Contact Requests' },
        { path: '/admin/panel', label: 'Main Panel' },
        { path: '/admin/panel/promotions', label: 'Manage promotions' },
        { path: '/admin/panel/products', label: 'Manage products' },
        { path: '/admin/panel/users', label: 'Manage Users' },
      ];
    }
  }
}
