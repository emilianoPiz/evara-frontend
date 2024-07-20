import { Component } from '@angular/core';
import { PromotionItemComponent } from './promotion-item/promotion-item.component';
import { SearchBarComponent } from '../../templates/search-bar/search-bar.component';
import { Promotion } from '../../models/promotion.model';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Component({
  selector: 'app-promotion-list',
  standalone: true,
  imports: [CommonModule, PromotionItemComponent, SearchBarComponent],
  templateUrl: './promotion-list.component.html',
  styleUrls: ['./promotion-list.component.scss'],
})
export class PromotionListComponent {
  searchTerm: string = '';
  filteredPromotions: Promotion[] = [];
  Promotions: Promotion[] = [];
  displayedPromotions: Promotion[] = [];
  currentIndex: number = 0;
  pageSize: number = 10;
  promotions$: Observable<Promotion[]>;

  constructor(private firestore: Firestore) {
    this.promotions$ = this.getAllPromotions();
    this.promotions$.subscribe((promotions) => {
      this.Promotions = promotions;
      this.filterPromotions();
    });
  }

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

  filterPromotions() {
    this.filteredPromotions = this.Promotions.filter(
      (element) =>
        element.promotion_name
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase()) ||
        element.category.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.resetDisplayedPromotions();
  }

  loadMorePromotions() {
    const nextIndex = this.currentIndex + this.pageSize;
    const nextPromotions = this.filteredPromotions.slice(
      this.currentIndex,
      nextIndex
    );
    this.displayedPromotions = this.displayedPromotions.concat(nextPromotions);
    this.currentIndex = nextIndex;
  }

  onSearch(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.filterPromotions();
  }

  resetDisplayedPromotions() {
    this.displayedPromotions = [];
    this.currentIndex = 0;
    this.loadMorePromotions();
  }
}
