import { Component, OnInit } from '@angular/core';
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
  links: any = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.updateLinks(this.router.url);
  }

  private updateLinks(url: string): void {
    if (url.includes('/shop')) {
      this.links = [
        { path: '/shop', label: 'Shop' },
        { path: '/cart', label: 'Cart' },
        { path: '/profile', label: 'Profile' },
      ];
    } else if (url.includes('/retreat')) {
      this.links = [
        { path: '/retreat', label: 'Retreat' },
        { path: '/events', label: 'Events' },
        { path: '/appointment', label: 'Appointment' },
      ];
    }
  }
}
