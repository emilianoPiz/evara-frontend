import { Component, Inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {
  deleteDoc,
  doc,
  Firestore,
  collection,
  collectionData,
} from '@angular/fire/firestore';
import { Promotion } from '../../../models/promotion.model';

@Component({
  selector: 'app-promotion-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promotion-item.component.html',
  styleUrls: ['./promotion-item.component.scss'],
})
export class PromotionItemComponent {
  promotions$: Observable<Promotion[]>;
  isActive: boolean = false;
  @Input() promotion!: Promotion;

  constructor(@Inject(Firestore) private firestore: Firestore) {
    this.promotions$ = this.getAllPromotions();
  }

  ngOnInit() {}

  getAllPromotions(): Observable<Promotion[]> {
    const promotionsCollection = collection(this.firestore, 'promotions');
    return collectionData(promotionsCollection, { idField: 'id' }).pipe(
      map((data) => data as Promotion[]),
      catchError((error) => {
        console.error('Error fetching promotions:', error);
        return []; // or rethrow the error if you prefer
      })
    );
  }

  deletePromotion(promotionId: string | undefined): void {
    if (!promotionId) {
      console.error('Promotion ID is undefined');
      return;
    }
    const docRef = doc(this.firestore, 'promotions', promotionId);
    deleteDoc(docRef)
      .then(() => {
        console.log('Promotion successfully deleted!');
        this.promotions$ = this.getAllPromotions(); // Refresh the list
      })
      .catch((error) => console.error('Error removing promotion:', error));
  }
}
