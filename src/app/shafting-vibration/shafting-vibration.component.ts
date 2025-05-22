import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-shafting-vibration',
  templateUrl: './shafting-vibration.component.html',
  styleUrls: ['./shafting-vibration.component.css']
})
export class ShaftingVibrationComponent {
  vibrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.vibrationForm = this.fb.group({
      rowA: this.createRowFormGroup(),
      rowB: this.createRowFormGroup(),
      rowC: this.createRowFormGroup(),
      rowD: this.createRowFormGroup(),
      rowE: this.createRowFormGroup(),
      rowF: this.createRowFormGroup(),
      rowG: this.createRowFormGroup(),
      rowH: this.createRowFormGroup(),
      rowJ: this.createRowFormGroup(),
      rowK: this.createRowFormGroup()
    });
  }

  createRowFormGroup(): FormGroup {
    return this.fb.group({
      port1: [null],
      stbd1: [null],
      port2: [null],
      stbd2: [null]
    });
  }

  getFormData() {
    return this.vibrationForm.value;
  }
}