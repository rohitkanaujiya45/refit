import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentTable1Component } from './equipment-table1.component';

describe('EquipmentTable1Component', () => {
  let component: EquipmentTable1Component;
  let fixture: ComponentFixture<EquipmentTable1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentTable1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentTable1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
