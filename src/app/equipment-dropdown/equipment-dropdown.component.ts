import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-equipment-dropdown',
  templateUrl: './equipment-dropdown.component.html',
  styleUrls: ['./equipment-dropdown.component.css']
})
export class EquipmentDropdownComponent implements OnInit {
  form!: FormGroup;
  equipments = [
    'Laptop', 'Printer', 'Monitor', 'Keyboard', 'Mouse',
    'Projector', 'Scanner', 'Speaker', 'Tablet', 'Headphones',
    'Webcam', 'Microphone', 'Docking Station', 'External Hard Drive',
    'USB Flash Drive', 'Surge Protector', 'Wireless Router',
    'Graphics Tablet', 'Smartphone', 'Network Switch',
    'NAS', 'UPS', 'Smartwatch', 'Label Printer', 'Barcode Scanner',
    'VR Headset', 'Digital Camera', 'Tripod', 'LED Ring Light',
    'Bluetooth Adapter', 'KVM Switch', 'Card Reader',
    'Smart TV', 'Chromecast', 'Amazon Fire Stick', 'Game Controller'
  ].map(item => ({ label: item, value: item }));

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      equipment: ['', Validators.required]
    });
  }

  onSelectChange(value: string): void {
    console.log('Selected Equipment:', value);
  }

  submitForm(): void {
    if (this.form.valid) {
      console.log('Form submitted with selected equipment:', this.form.value.equipment);
    }
  }
}
