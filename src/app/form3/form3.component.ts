import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component implements OnInit {
  form: FormGroup;

  // To show/hide rows dynamically
  showRows: { [key: string]: boolean } = {
    row1: true,
    row2: true,
    row3: true,
    row4: true,
    row5: true,
    row6: true
  };

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      medicine1: ['Amoxicillin'],
      quantity1: [''],
      remarks1: [''],
      cracks1: [''],
      expiring1: [''],
      manufacturing1: [''],
      tabs1: [''],

      medicine2: ['Paracetamol'],
      quantity2: [''],
      remarks2: [''],
      cracks2: [''],
      expiring2: [''],
      manufacturing2: [''],
      tabs2: [''],

      medicine3: ['Ibuprofen'],
      quantity3: [''],
      remarks3: [''],
      cracks3: [''],
      expiring3: [''],
      manufacturing3: [''],
      tabs3: [''],

      medicine4: ['Aspirin'],
      quantity4: [''],
      remarks4: [''],
      cracks4: [''],
      expiring4: [''],
      manufacturing4: [''],
      tabs4: [''],

      medicine5: ['Ciprofloxacin'],
      quantity5: [''],
      remarks5: [''],
      cracks5: [''],
      expiring5: [''],
      manufacturing5: [''],
      tabs5: [''],

      medicine6: ['Amoxiclav'],
      quantity6: [''],
      remarks6: [''],
      cracks6: [''],
      expiring6: [''],
      manufacturing6: [''],
      tabs6: ['']
    });
  }

  ngOnInit(): void {}

  // Individual delete functions for each row
  deleteRow1(): void {
    this.showRows.row1 = false;
    this.form.get('quantity1')?.setValue('');
    this.form.get('remarks1')?.setValue('');
    this.form.get('cracks1')?.setValue('');
    this.form.get('expiring1')?.setValue('');
    this.form.get('manufacturing1')?.setValue('');
    this.form.get('tabs1')?.setValue('');
    this.recalculateSerialNumbers();
  }

  deleteRow2(): void {
    this.showRows.row2 = false;
    this.form.get('quantity2')?.setValue('');
    this.form.get('remarks2')?.setValue('');
    this.form.get('cracks2')?.setValue('');
    this.form.get('expiring2')?.setValue('');
    this.form.get('manufacturing2')?.setValue('');
    this.form.get('tabs2')?.setValue('');
    this.recalculateSerialNumbers();
  }

  deleteRow3(): void {
    this.showRows.row3 = false;
    this.form.get('quantity3')?.setValue('');
    this.form.get('remarks3')?.setValue('');
    this.form.get('cracks3')?.setValue('');
    this.form.get('expiring3')?.setValue('');
    this.form.get('manufacturing3')?.setValue('');
    this.form.get('tabs3')?.setValue('');
    this.recalculateSerialNumbers();
  }

  deleteRow4(): void {
    this.showRows.row4 = false;
    this.form.get('quantity4')?.setValue('');
    this.form.get('remarks4')?.setValue('');
    this.form.get('cracks4')?.setValue('');
    this.form.get('expiring4')?.setValue('');
    this.form.get('manufacturing4')?.setValue('');
    this.form.get('tabs4')?.setValue('');
    this.recalculateSerialNumbers();
  }

  deleteRow5(): void {
    this.showRows.row5 = false;
    this.form.get('quantity5')?.setValue('');
    this.form.get('remarks5')?.setValue('');
    this.form.get('cracks5')?.setValue('');
    this.form.get('expiring5')?.setValue('');
    this.form.get('manufacturing5')?.setValue('');
    this.form.get('tabs5')?.setValue('');
    this.recalculateSerialNumbers();
  }

  deleteRow6(): void {
    this.showRows.row6 = false;
    this.form.get('quantity6')?.setValue('');
    this.form.get('remarks6')?.setValue('');
    this.form.get('cracks6')?.setValue('');
    this.form.get('expiring6')?.setValue('');
    this.form.get('manufacturing6')?.setValue('');
    this.form.get('tabs6')?.setValue('');
    this.recalculateSerialNumbers();
  }

  recalculateSerialNumbers(): void {
    let serialNumber = 1;
    for (let i = 1; i <= 6; i++) {
      if (this.showRows[`row${i}`]) {
        const rowNumber = document.getElementById(`row-number-${i}`);
        if (rowNumber) {
          rowNumber.innerText = `${serialNumber}`;
        }
        serialNumber++;
      }
    }
  }

  saveData(): void {
    const formData = this.form.value;
    console.log('Form Data:', formData);
    alert('Data saved successfully!');
  }


    // form: FormGroup;

    // // To show/hide rows dynamically
    // showRows: { [key: string]: boolean } = {
    //   row1: true,
    //   row2: true,
    //   row3: true,
    //   row4: true,
    //   row5: true,
    //   row6: true
    // };
  
    // constructor(private fb: FormBuilder) {
    //   this.form = this.fb.group({
    //     medicine1: ['Amoxicillin'],
    //     quantity1: [''],
    //     remarks1: [''],
    //     cracks1: [''],
    //     expiring1: [''],
    //     manufacturing1: [''],
    //     tabs1: [''],
  
    //     medicine2: ['Paracetamol'],
    //     quantity2: [''],
    //     remarks2: [''],
    //     cracks2: [''],
    //     expiring2: [''],
    //     manufacturing2: [''],
    //     tabs2: [''],
  
    //     medicine3: ['Ibuprofen'],
    //     quantity3: [''],
    //     remarks3: [''],
    //     cracks3: [''],
    //     expiring3: [''],
    //     manufacturing3: [''],
    //     tabs3: [''],
  
    //     medicine4: ['Aspirin'],
    //     quantity4: [''],
    //     remarks4: [''],
    //     cracks4: [''],
    //     expiring4: [''],
    //     manufacturing4: [''],
    //     tabs4: [''],
  
    //     medicine5: ['Ciprofloxacin'],
    //     quantity5: [''],
    //     remarks5: [''],
    //     cracks5: [''],
    //     expiring5: [''],
    //     manufacturing5: [''],
    //     tabs5: [''],
  
    //     medicine6: ['Amoxiclav'],
    //     quantity6: [''],
    //     remarks6: [''],
    //     cracks6: [''],
    //     expiring6: [''],
    //     manufacturing6: [''],
    //     tabs6: ['']
    //   });
    // }
  
    // ngOnInit(): void {}
  
    // deleteRow(rowNum: number): void {
    //   // Hide the row and reset its values when deleted
    //   this.showRows[`row${rowNum}`] = false;
  
    //   this.form.get(`quantity${rowNum}`)?.setValue('');
    //   this.form.get(`remarks${rowNum}`)?.setValue('');
    //   this.form.get(`cracks${rowNum}`)?.setValue('');
    //   this.form.get(`expiring${rowNum}`)?.setValue('');
    //   this.form.get(`manufacturing${rowNum}`)?.setValue('');
    //   this.form.get(`tabs${rowNum}`)?.setValue('');
  
    //   this.recalculateSerialNumbers();
    // }
  
    // recalculateSerialNumbers(): void {
    //   let serialNumber = 1;
    //   for (let i = 1; i <= 6; i++) {
    //     if (this.showRows[`row${i}`]) {
    //       const rowNumber = document.getElementById(`row-number-${i}`);
    //       if (rowNumber) {
    //         rowNumber.innerText = `${serialNumber}`;
    //       }
    //       serialNumber++;
    //     }
    //   }
    // }
  
    // saveData(): void {
    //   // Collect the form data
    //   const formData = this.form.value;
    //   console.log('Form Data:', formData);
  
    //   // You can send this formData to a server or save it in localStorage or elsewhere
    //   alert('Data saved successfully!');
    // }
  }
  