import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermalTableComponent } from './thermal-table.component';

describe('ThermalTableComponent', () => {
  let component: ThermalTableComponent;
  let fixture: ComponentFixture<ThermalTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThermalTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThermalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
