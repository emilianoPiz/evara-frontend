import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, RouterModule } from '@angular/router';
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
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  links: any = [];

  constructor(private route: ActivatedRoute) {
    this.route.url.subscribe((url) => {
      if (url.toString().includes('shop')) {
        this.links = [
          { path: '/shop', label: 'Shop' },
          { path: '/cart', label: 'Cart' },
          { path: '/profile', label: 'Profile' },
        ];
      }
      if (url.toString().includes('retreat')) {
        this.links = [
          { path: '/retreat', label: 'Retreat' },
          { path: '/events', label: 'Events' },
          { path: '/appointment', label: 'Appointment' },
        ];
      }
    });
  }
}
