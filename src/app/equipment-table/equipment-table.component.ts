
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { Equipment, EquipmentService } from '../equipment.model';

// @Component({
//   selector: 'app-equipment-table',
//   templateUrl: './equipment-table.component.html',
//   styleUrls: ['./equipment-table.component.css']
// })
// export class EquipmentTableComponent implements OnInit {
//   equipmentList: Equipment[] = [];
//   sections: string[] = [];
//   sectionEquipmentMap: {[key: string]: Equipment[]} = {};
//   selectedEquipment: Equipment | null = null;
//   equipmentForm: FormGroup;

//   constructor(
//     private equipmentService: EquipmentService,
//     private fb: FormBuilder
//   ) {
//     this.equipmentForm = this.fb.group({
//       date: [''],
//       sdc: [''],
//       vibrationTrials: [''],
//       spm: [''],
//       mountAttenuation: [''],
//       performanceTrials: [''],
//       overallStatus: [''],
//       manDays: ['']
//     });
//   }

//   ngOnInit(): void {
//     this.sections = this.equipmentService.getSections();
//     this.equipmentList = this.equipmentService.getAllEquipment();
    
//     // Create a map of equipment by section for easier template access
//     this.sections.forEach(section => {
//       this.sectionEquipmentMap[section] = this.equipmentService.getEquipmentBySection(section);
//     });
//   }

//   // Helper method to format clearance requirement with line breaks
//   formatClearanceRequirement(requirement: string): string {
//     return requirement.replace(/\n/g, '<br>');
//   }

//   selectEquipment(equipment: Equipment): void {
//     this.selectedEquipment = equipment;
//     this.equipmentForm.patchValue({
//       date: equipment.date || '',
//       sdc: equipment.sdc || '',
//       vibrationTrials: equipment.vibrationTrials || '',
//       spm: equipment.spm || '',
//       mountAttenuation: equipment.mountAttenuation || '',
//       performanceTrials: equipment.performanceTrials || '',
//       overallStatus: equipment.overallStatus || '',
//       manDays: equipment.manDays || ''
//     });
//   }

//   saveEquipment(): void {
//     if (this.selectedEquipment) {
//       const updatedEquipment: Equipment = {
//         ...this.selectedEquipment,
//         ...this.equipmentForm.value
//       };
//       this.equipmentService.updateEquipment(updatedEquipment);
      
//       // Update the local list
//       const index = this.equipmentList.findIndex(eq => eq.id === updatedEquipment.id);
//       if (index !== -1) {
//         this.equipmentList[index] = updatedEquipment;
//       }
      
//       // Also update the section map
//       const section = updatedEquipment.section || '';
//       if (section) {
//         const sectionIndex = this.sectionEquipmentMap[section].findIndex(eq => eq.id === updatedEquipment.id);
//         if (sectionIndex !== -1) {
//           this.sectionEquipmentMap[section][sectionIndex] = updatedEquipment;
//         }
//       }
      
//       this.selectedEquipment = null;
//       this.equipmentForm.reset();
//     }
//   }

//   cancelEdit(): void {
//     this.selectedEquipment = null;
//     this.equipmentForm.reset();
//   }
// }




// import { Component, OnInit } from '@angular/core';
// import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
// import { EQUIPMENT_DATA } from '../equipment-data';

// @Component({
//   selector: 'app-equipment-table',
//   templateUrl: './equipment-table.component.html',
//   styleUrls: ['./equipment-table.component.css']
// })
// export class EquipmentTableComponent implements OnInit {
//   form!: FormGroup;
//   equipmentList = EQUIPMENT_DATA;

//   get equipmentFormArray(): FormArray {
//     return this.form.get('equipmentList') as FormArray;
//   }

//   constructor(private fb: FormBuilder) {}

//   ngOnInit() {
//     this.form = this.fb.group({
//       equipmentList: this.fb.array(this.equipmentList.map(() =>
//         this.fb.group({
//           date: [''],
//           sdc: [''],
//           vibration: [''],
//           trials: [''],
//           spm: [''],
//           mountAttenuation: [''],
//           performanceTrials: [''],
//           overallStatus: [''],
//           manDays: ['']
//         })
//       ))
//     });
//   }

//   submitTable() {
//     const submittedData = this.equipmentList.map((e, i) => ({
//       equipment: e.equipment,
//       toBeCleared: e.toBeCleared,
//       btssc: e.btssc,
//       ...this.equipmentFormArray.at(i).value
//     }));
//     console.log('Submitted Data:', submittedData);
//     alert('Form submitted. Check console.');
//   }
// }



// deep



// // equipment-table.component.ts
// import { Component } from '@angular/core';

// interface EquipmentItem {
//   serial: number;
//   equipment: string;
//   clearanceRequirement: string;
//   date?: string;
//   sdc?: string;
//   vibrationTrials?: string;
//   spm?: string;
//   mountAttenuation?: string;
//   performanceTrials?: string;
//   overallStatus?: string;
//   manDays?: string;
//   isHeader?: boolean;
//   isSubHeader?: boolean;
// }

// @Component({
//   selector: 'app-equipment-table',
//   templateUrl: './equipment-table.component.html',
//   styleUrls: ['./equipment-table.component.css']
// })
// export class EquipmentTableComponent {
//  equipmentList: EquipmentItem[] = [
//   // Main Engines
//   { 
//     serial: 1, 
//     equipment: 'Port Main Engine', 
//     clearanceRequirement: 'To be cleared by DTTT(V)',
//     isSubHeader: true 
//   },
//   { 
//     serial: 2, 
//     equipment: 'Stbd Main Engine', 
//     clearanceRequirement: 'To be cleared by DTTT(V)',
//     isSubHeader: true 
//   },
  
//   // Gear Boxes
//   { 
//     serial: 3, 
//     equipment: 'Gear Box (Stbd)', 
//     clearanceRequirement: 'a. SDCs.\nb. Shaft Lock Checks.\nc. Torsionmeter Calibration Certificate\nd. POL Report',
//     isSubHeader: false 
//   },
//   { 
//     serial: 4, 
//     equipment: 'Gear Box (Port)', 
//     clearanceRequirement: 'a. SDCs.\nb. Shaft Lock Checks.\nc. Torsionmeter Calibration Certificate\nd. POL Report',
//     isSubHeader: false 
//   },
  
//   // Shafting
//   { 
//     serial: 5, 
//     equipment: 'Shafting (Port)', 
//     clearanceRequirement: 'a. SDCs.\nb. Shaft Lock Checks.\nc. Torsionmeter Calibration Certificate\nd. POL Report',
//     isSubHeader: false 
//   },
//   // Continue with all other items...
  
//   // Section headers
//   {
//     equipment: 'Steering Gear',
//     isHeader: true,
//     serial: 0,
//     clearanceRequirement: ''
//   },
//   { 
//     serial: 19, 
//     equipment: 'Steering Gear Harbour Trials', 
//     clearanceRequirement: 'To be cleared prior BT',
//     isSubHeader: false 
//   },
//   // Continue with all remaining items...
// ];

//   // Add all remaining equipment items to the array
//   // This is a simplified version - in a real app you would include all items
  
//   getDisplayClearance(requirement: string): string[] {
//     return requirement.split('\n');
//   }
// }


import { Component } from '@angular/core';

@Component({
  selector: 'app-equipment-table',
  templateUrl: './equipment-table.component.html',
  styleUrls: ['./equipment-table.component.css']
})
export class EquipmentTableComponent {
  equipmentData: any[] = Array(22).fill({}).map(() => ({
    date: '',
    sdc: '',
    vibration: '',
    spm: '',
    mountAttenuation: '',
    performance: '',
    status: 'Pending',
    manDays: 0
  }));

  steeringGearItems = [
    { 
      id: 19, 
      name: 'Steering Gear Harbour Trials',
      clearance: 'To be cleared prior BT',
      rowspan: 3,
      class: 'multi-line'
    },
    { 
      id: 20, 
      name: 'Steering Pump (Port)',
      clearance: '',
      rowspan: null,
      class: ''
    },
    { 
      id: 21, 
      name: 'Steering Pump (Stbd)',
      clearance: '',
      rowspan: null,
      class: ''
    },
    { 
      id: 22, 
      name: 'Steering Gear Sea Trials',
      clearance: 'To be cleared prior SSC 1',
      rowspan: 1,
      class: ''
    }
  ];
}