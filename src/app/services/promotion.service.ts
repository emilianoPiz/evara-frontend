import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FirebaseService } from './firebase-related-services/firebase.service';
import { Promotion } from '../models/promotion.model';

@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  constructor(private firebaseService: FirebaseService) {}

  validatePromotionCode(promoCode: string): Observable<Promotion | null> {
    return this.firebaseService
      .getDocumentsByQuery('promotions', 'promo_code', promoCode)
      .pipe(
        map((promotions: Promotion[]) =>
          promotions.length ? promotions[0] : null
        )
      );
  }

  getAllPromotions(): Observable<Promotion[]> {
    return this.firebaseService.getAllPromotions().pipe(
      map((promotions: any[]) =>
        promotions.map((promotion) => ({
          id: promotion.id,
          ...promotion,
        }))
      )
    );
  }
}
