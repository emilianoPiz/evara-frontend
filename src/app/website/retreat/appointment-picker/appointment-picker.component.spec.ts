import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentPickerComponent } from './appointment-picker.component';

describe('AppointmentPickerComponent', () => {
  let component: AppointmentPickerComponent;
  let fixture: ComponentFixture<AppointmentPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentPickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
