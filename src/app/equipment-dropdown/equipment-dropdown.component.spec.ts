import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentDropdownComponent } from './equipment-dropdown.component';

describe('EquipmentDropdownComponent', () => {
  let component: EquipmentDropdownComponent;
  let fixture: ComponentFixture<EquipmentDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
