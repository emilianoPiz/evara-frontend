import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FirebaseService } from '../../../services/firebase-related-services/firebase.service';

@Component({
  selector: 'app-manage-promotions',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './manage-promotions.component.html',
  styleUrl: './manage-promotions.component.scss',
})
export class ManagePromotionsComponent {
  addPromotionId: string = '';
  updatePromotionId: string = '';
  deletePromotionId: string = '';

  constructor(private firebaseService: FirebaseService) {}

  addPromotion(promotion: any) {
    this.firebaseService
      .insertPromotion(promotion)
      .then(() => {
        console.log('Promotion added successfully!');
      })
      .catch((error) => {
        console.error('Error adding promotion: ', error);
      });
  }

  updatePromotion(promotionId: string, promotion: any) {
    this.firebaseService
      .updatePromotion(promotionId, promotion)
      .then(() => {
        console.log('Promotion updated successfully!');
      })
      .catch((error) => {
        console.error('Error updating promotion: ', error);
      });
  }

  deletePromotion(promotionId: string) {
    this.firebaseService
      .deletePromotion(promotionId)
      .then(() => {
        console.log('Promotion deleted successfully!');
      })
      .catch((error) => {
        console.error('Error deleting promotion: ', error);
      });
  }
}
