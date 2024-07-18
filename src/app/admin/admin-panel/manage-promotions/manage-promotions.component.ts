import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FirebaseService } from '../../../services/firebase-related-services/firebase.service';
import { Promotion } from '../../../models/promotion.model';
import {
  Firestore,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from '@angular/fire/firestore';

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

  constructor(
    private firebaseService: FirebaseService,
    private firestore: Firestore
  ) {}

  async addPromotion(promotion: Promotion) {
    try {
      const docRef = await addDoc(
        collection(this.firestore, 'promotions'),
        promotion
      );
      promotion.id = docRef.id; // Store the auto-generated ID in your promotion object if needed
      console.log('Promotion added successfully with ID:', promotion.id);
    } catch (error) {
      console.error('Error adding promotion: ', error);
    }
  }

  async updatePromotion(promotionId: string, promotion: Partial<Promotion>) {
    try {
      const promotionRef = doc(this.firestore, `promotions/${promotionId}`);
      await updateDoc(promotionRef, promotion);
      console.log('Promotion updated successfully!');
    } catch (error) {
      console.error('Error updating promotion: ', error);
    }
  }

  async deletePromotion(promotionId: string) {
    try {
      const promotionRef = doc(this.firestore, `promotions/${promotionId}`);
      await deleteDoc(promotionRef);
      console.log('Promotion deleted successfully!');
    } catch (error) {
      console.error('Error deleting promotion: ', error);
    }
  }
}
