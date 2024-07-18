import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionItemComponent } from './promotion-item.component';

describe('PromotionItemComponent', () => {
  let component: PromotionItemComponent;
  let fixture: ComponentFixture<PromotionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromotionItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
