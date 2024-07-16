import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopPromotionsBannerComponent } from './shop-promotions-banner.component';

describe('ShopPromotionsBannerComponent', () => {
  let component: ShopPromotionsBannerComponent;
  let fixture: ComponentFixture<ShopPromotionsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopPromotionsBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopPromotionsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
