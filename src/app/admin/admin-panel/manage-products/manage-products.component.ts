import { Component } from '@angular/core';
import { FirebaseService } from '../../../services/firebase-related-services/firebase.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-products',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './manage-products.component.html',
  styleUrl: './manage-products.component.scss',
})
export class ManageProductsComponent {
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
}
