import { Component, OnInit } from '@angular/core';
import { Promotion } from '../../../models/promotion.model';
import { PromotionService } from '../../../services/promotion.service';
import { CurrencyPipe, NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports: [CurrencyPipe, NgIf],
  selector: 'app-promotion-banner',
  templateUrl: './promotion-banner.component.html',
  styleUrls: ['./promotion-banner.component.scss'],
})
export class PromotionBannerComponent implements OnInit {
  promotions: Promotion[] = [];
  currentPromotionIndex: number = 0;

  constructor(private promotionService: PromotionService) {}

  ngOnInit(): void {
    this.promotionService.getAllPromotions().subscribe((promotions) => {
      this.promotions = promotions;
      this.startPromotionRotation();
    });
  }

  startPromotionRotation(): void {
    setInterval(() => {
      this.currentPromotionIndex =
        (this.currentPromotionIndex + 1) % this.promotions.length;
    }, 5000); // Change promotion every 5 seconds
  }
}
