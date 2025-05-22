import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';

interface ThermalParameter {
  position: string;
  portRemote: number | null;
  portLocal: number | null;
  stbdRemote: number | null;
  stbdLocal: number | null;
}

@Component({
  selector: 'app-thermal-table',
  templateUrl: './thermal-table.component.html',
  styleUrls: ['./thermal-table.component.css']
})
export class ThermalTableComponent {

   constructor(private fb: FormBuilder) {}
thermalForm!: FormGroup;
  ngOnInit(): void {
    this.thermalForm = this.fb.group({
      portRemote1: [''], portLocal1: [''], stbdRemote1: [''], stbdLocal1: [''],
      portRemote2: [''], portLocal2: [''], stbdRemote2: [''], stbdLocal2: [''],
      portRemote3: [''], portLocal3: [''], stbdRemote3: [''], stbdLocal3: [''],
      portRemote4: [''], portLocal4: [''], stbdRemote4: [''], stbdLocal4: [''],
      portRemote5: [''], portLocal5: [''], stbdRemote5: [''], stbdLocal5: [''],
      portRemote6: [''], portLocal6: [''], stbdRemote6: [''], stbdLocal6: [''],
      portRemote7: [''], portLocal7: [''], stbdRemote7: [''], stbdLocal7: [''],
      portRemote8: [''], portLocal8: [''], stbdRemote8: [''], stbdLocal8: [''],
      portRemote9: [''], portLocal9: [''], stbdRemote9: [''], stbdLocal9: [''],
    });
  }
}