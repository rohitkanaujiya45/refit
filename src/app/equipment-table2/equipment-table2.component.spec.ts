import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentTable2Component } from './equipment-table2.component';

describe('EquipmentTable2Component', () => {
  let component: EquipmentTable2Component;
  let fixture: ComponentFixture<EquipmentTable2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentTable2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentTable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
