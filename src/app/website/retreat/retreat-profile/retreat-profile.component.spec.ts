import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetreatProfileComponent } from './retreat-profile.component';

describe('RetreatProfileComponent', () => {
  let component: RetreatProfileComponent;
  let fixture: ComponentFixture<RetreatProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetreatProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetreatProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
