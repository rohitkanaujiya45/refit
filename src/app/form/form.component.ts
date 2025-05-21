import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import Quill from 'quill';
import { ApiService } from '../ApiService/apiService';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  form: FormGroup;
  nextMountNumber = 1;
  nextFieldIndex = 1;
  quillEditor: any;

  constructor(private fb: FormBuilder, private http: HttpClient,private apiService: ApiService) {
    this.form = this.fb.group({
      mountForm1: this.fb.array([]),
      mountForm2: this.fb.array([]),
      additionalNotes: [''] // For the additional notes field
    });

    // Initialize form1 (first 12 rows)
    for (let i = 1; i <= 12; i++) {
      this.addForm1({ mountNumber: i });
    }
    this.nextMountNumber = 13;

    // Initialize form2 (6 predefined mount names)
    const defaultMounts = ['Top Panel', 'Bottom Panel', 'Left Wing', 'Right Wing', 'Main Body', 'Backup Unit'];
    for (let mount of defaultMounts) {
      this.addForm2({ mountName: mount });
    }
  }
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    // Initialize Quill editor
    const editor = new Quill('#editor', {
      theme: 'snow',
      placeholder: 'Type your additional notes here...',
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline'],
          ['link'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['blockquote'],
        ],
      },
    });
    this.quillEditor = editor;

    // Sync Quill data to form control
    editor.on('text-change', () => {
      this.form.get('additionalNotes')?.setValue(editor.root.innerHTML);
    });
  }
  get form1(): FormArray {
    return this.form.get('mountForm1') as FormArray;
  }

  get form2(): FormArray {
    return this.form.get('mountForm2') as FormArray;
  }

  createForm1Group(data?: any): FormGroup {
    const mountNumber = data?.mountNumber ?? this.nextMountNumber++;
    return this.fb.group({
      mountNumber: [mountNumber],
      [`quantity_${mountNumber}`]: [data?.[`quantity_${mountNumber}`] || ''],
      [`remarks_${mountNumber}`]: [data?.[`remarks_${mountNumber}`] || '']
    });
  }

  createForm2Group(data?: any): FormGroup {
    const index = this.nextFieldIndex++;
    return this.fb.group({
      mountName: [data?.mountName || ''],
      [`horrer_${index}`]: [data?.[`horrer_${index}`] || ''],
      [`abc_${index}`]: [data?.[`abc_${index}`] || ''],
      [`dear_${index}`]: [data?.[`dear_${index}`] || ''],
      [`remarks_${index}`]: [data?.[`remarks_${index}`] || '']
    });
  }

  addForm1(data?: any) {
    this.form1.push(this.createForm1Group(data));
  }

  addForm2(data?: any) {
    this.form2.push(this.createForm2Group(data));
  }

  removeForm1(index: number) {
    this.form1.removeAt(index);
  }

  removeForm2(index: number) {
    this.form2.removeAt(index);
  }

  getFieldName(group: FormGroup, prefix: string): string {
    return Object.keys(group.controls).find(key => key.startsWith(prefix)) || '';
  }
  getFormGroup(control: AbstractControl): FormGroup {
    return control as FormGroup;
  }
  // onSubmitAll() {
  //   if (this.form.valid) {
  //     const form1Data = this.form.value.mountForm1;
  //     const form2Data = this.form.value.mountForm2;
  //     const additionalNotes = this.form.value.additionalNotes;
  //     console.log('Form 1 Data:', form1Data);
  //     console.log('Form 2 Data:', form2Data);
  //     console.log('Additional Notes:', additionalNotes);

  //     // API example:
  //     // this.http.post('/api/save', {form1: form1Data, form2: form2Data}).subscribe(...);

  //     alert('Forms submitted successfully!');
  //   } else {
  //     alert('Please fill all required fields!');
  //   }
  // }
  onSubmitAll() {
    if (this.form.valid) {
      const form1Data = this.form.value.mountForm1;
      const form2Data = this.form.value.mountForm2;
      const additionalNotes = this.form.value.additionalNotes;

      const formData = {
        form1: form1Data,
        form2: form2Data,
        additionalNotes: additionalNotes
      };

      this.apiService.submitForm(formData).subscribe(
        response => {
          console.log('Form submitted successfully:', response);
          alert('Forms submitted successfully!');
        },
        error => {
          console.error('Error submitting form:', error);
          alert('An error occurred while submitting the form!');
        }
      );
    } else {
      alert('Please fill all required fields!');
    }
  }

}