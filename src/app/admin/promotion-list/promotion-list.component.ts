import { Component } from '@angular/core';
import { PromotionItemComponent } from './promotion-item/promotion-item.component';
import { SearchBarComponent } from '../../templates/search-bar/search-bar.component';
import { Promotion } from '../../models/promotion.model';

@Component({
  selector: 'app-promotion-list',
  standalone: true,
  imports: [PromotionItemComponent, SearchBarComponent],
  templateUrl: './promotion-list.component.html',
  styleUrl: './promotion-list.component.scss',
})
export class PromotionListComponent {
  searchTerm: string = '';
  filteredPromotions: any[] = [];
  Promotions: Promotion[] = [];
  displayedPromotions: any[] = [];
  currentIndex: number = 0;
  pageSize: number = 10;

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
