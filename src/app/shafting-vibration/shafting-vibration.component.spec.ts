import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShaftingVibrationComponent } from './shafting-vibration.component';

describe('ShaftingVibrationComponent', () => {
  let component: ShaftingVibrationComponent;
  let fixture: ComponentFixture<ShaftingVibrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShaftingVibrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShaftingVibrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
