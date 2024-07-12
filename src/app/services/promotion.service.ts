import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Promotion } from '../models/promotion.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  private promotionsCollection =
    this.firestore.collection<Promotion>('promotions');

  constructor(private firestore: AngularFirestore) {}

  createPromotion(promotion: Promotion): Promise<void> {
    const id = this.firestore.createId();
    return this.promotionsCollection.doc(id).set({ ...promotion, id });
  }

  getPromotion(promotionId: string): Observable<Promotion | undefined> {
    return this.promotionsCollection.doc<Promotion>(promotionId).valueChanges();
  }

  updatePromotion(
    promotionId: string,
    promotion: Partial<Promotion>
  ): Promise<void> {
    return this.promotionsCollection.doc(promotionId).update(promotion);
  }

  deletePromotion(promotionId: string): Promise<void> {
    return this.promotionsCollection.doc(promotionId).delete();
  }
}
