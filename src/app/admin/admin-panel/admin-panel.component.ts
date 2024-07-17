import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebase-related-services/firebase.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
  providers: [FirebaseService],
})
export class AdminPanelComponent {
  productId: string = '';
  userId: string = '';

  constructor(private firebaseService: FirebaseService) {}

  addProduct(product: any) {
    this.firebaseService.insertProduct(product).then(() => {
      console.log('Product added successfully!');
    });
  }

  updateProduct(productId: string, product: any) {
    this.firebaseService.updateProduct(productId, product).then(() => {
      console.log('Product updated successfully!');
    });
  }

  deleteProduct(productId: string) {
    this.firebaseService.deleteProduct(productId).then(() => {
      console.log('Product deleted successfully!');
    });
  }

  addUser(user: any) {
    this.firebaseService.insertUser(user).then(() => {
      console.log('User added successfully!');
    });
  }

  updateUser(userId: string, user: any) {
    this.firebaseService.updateUser(userId, user).then(() => {
      console.log('User updated successfully!');
    });
  }

  deleteUser(userId: string) {
    this.firebaseService.deleteUser(userId).then(() => {
      console.log('User deleted successfully!');
    });
  }
}
