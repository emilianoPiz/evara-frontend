import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetreatHomeComponent } from './retreat-home.component';

describe('RetreatHomeComponent', () => {
  let component: RetreatHomeComponent;
  let fixture: ComponentFixture<RetreatHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetreatHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetreatHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
