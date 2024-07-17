import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebase-related-services/firebase.service';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [RouterModule, ManageUsersComponent, ManageProductsComponent],
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
  providers: [FirebaseService],
})
export class AdminPanelComponent {}
