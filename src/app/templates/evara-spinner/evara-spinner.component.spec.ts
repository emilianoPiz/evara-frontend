import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaraSpinnerComponent } from './evara-spinner.component';

describe('EvaraSpinnerComponent', () => {
  let component: EvaraSpinnerComponent;
  let fixture: ComponentFixture<EvaraSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaraSpinnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaraSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
