import { Component } from '@angular/core';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { MatNavList } from '@angular/material/list';
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
} from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { EvaraSpinnerComponent } from '../../templates/evara-spinner/evara-spinner.component';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    MatSidenav,
    MatGridList,
    MatGridTile,
    MatNavList,
    MatSidenavContainer,
    MatSidenavContent,
    MatToolbar,
    RouterModule,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    EvaraSpinnerComponent,
    MatCardSubtitle,
    CommonModule,
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
})
export class AdminDashboardComponent {
  products_in_warehouse: number | undefined = 10;
  monthly_sells: number | undefined = 1000;
}
