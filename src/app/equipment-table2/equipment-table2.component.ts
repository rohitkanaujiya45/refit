import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
interface EquipmentItem {
  id: number;
  name: string;
  isOffered: boolean;
  overallStatus: 'Pending' | 'Approved' | 'Rejected';
}
@Component({
  selector: 'app-equipment-table2',
  templateUrl: './equipment-table2.component.html',
  styleUrls: ['./equipment-table2.component.css']
})
export class EquipmentTable2Component {
  // You can add component logic here if needed
  // For example, you could make the table data dynamic:
  
 equipmentList: EquipmentItem[] = [
    // Original items (1-13)
    { id: 1, name: 'Shafting (Port)', isOffered: false, overallStatus: 'Pending' },
    { id: 2, name: 'Shafting (Stbd)', isOffered: false, overallStatus: 'Pending' },
    { id: 3, name: 'Diesel Alternator (1MW)', isOffered: false, overallStatus: 'Pending' },
    { id: 4, name: 'HPAC No.1', isOffered: false, overallStatus: 'Pending' },
    { id: 5, name: 'HPAC No.2', isOffered: false, overallStatus: 'Pending' },
    { id: 6, name: 'HPAC No.3', isOffered: false, overallStatus: 'Pending' },
    { id: 7, name: 'DDHPAC', isOffered: false, overallStatus: 'Pending' },
    { id: 8, name: 'AC Plant No.1', isOffered: false, overallStatus: 'Pending' },
    { id: 9, name: 'AC Plant No.2', isOffered: true, overallStatus: 'Approved' },
    { id: 10, name: 'AC Plant No.3', isOffered: true, overallStatus: 'Rejected' },
    { id: 11, name: 'AC Plant No.4', isOffered: true, overallStatus: 'Approved' },
    { id: 12, name: 'AC Plant No.5', isOffered: true, overallStatus: 'Rejected' },
    { id: 13, name: 'AC Plant No.6', isOffered: true, overallStatus: 'Approved' },
    { id: 14, name: 'Refrigeration Plant No.1', isOffered: false, overallStatus: 'Pending' },
    { id: 15, name: 'Refrigeration Plant No.2', isOffered: false, overallStatus: 'Pending' },
    { id: 16, name: 'Fire main Pump No.1', isOffered: false, overallStatus: 'Pending' },
    { id: 17, name: 'Fire main Pump No.2', isOffered: false, overallStatus: 'Pending' },
    { id: 18, name: 'Fire main Pump No.3', isOffered: false, overallStatus: 'Pending' },
    { id: 19, name: 'Fire main Pump No.4', isOffered: false, overallStatus: 'Pending' },
    { id: 20, name: 'Fire main Pump No.5', isOffered: false, overallStatus: 'Pending' },
    { id: 21, name: 'Fire main Pump No.6', isOffered: false, overallStatus: 'Pending' },
    { id: 22, name: 'Fire main Pump No.7', isOffered: false, overallStatus: 'Pending' },
    { id: 23, name: 'Fire main Pump No.8', isOffered: false, overallStatus: 'Pending' },
    { id: 24, name: 'Fire main Pump No.9', isOffered: false, overallStatus: 'Pending' },
    { id: 25, name: 'AC Chilled Water No.1', isOffered: false, overallStatus: 'Pending' },
    { id: 26, name: 'AC Chilled Water No.2', isOffered: false, overallStatus: 'Pending' },
    { id: 27, name: 'AC Chilled Water No.3', isOffered: false, overallStatus: 'Pending' },
    { id: 28, name: 'AC Chilled Water No.4', isOffered: false, overallStatus: 'Pending' },
    { id: 29, name: 'AC Chilled Water No.5', isOffered: false, overallStatus: 'Pending' },
    { id: 30, name: 'AC Chilled Water No.6', isOffered: false, overallStatus: 'Pending' },
    { id: 31, name: 'AC SW Pump No.1', isOffered: false, overallStatus: 'Pending' },
    { id: 32, name: 'AC SW Pump No.2', isOffered: false, overallStatus: 'Pending' },
    { id: 33, name: 'AC SW Pump No.3', isOffered: false, overallStatus: 'Pending' },
    { id: 34, name: 'AC SW Pump No.4', isOffered: false, overallStatus: 'Pending' },
    { id: 35, name: 'AC SW Pump No.5', isOffered: false, overallStatus: 'Pending' },
    { id: 36, name: 'AC SW Pump No.6', isOffered: false, overallStatus: 'Pending' },
    { id: 37, name: 'Boiler Feed Transfer Pump', isOffered: false, overallStatus: 'Pending' },
    { id: 38, name: 'AVCAT Transfer Pump', isOffered: false, overallStatus: 'Pending' },
    { id: 39, name: 'DD Fire main Pump (AFT)', isOffered: false, overallStatus: 'Pending' },
    { id: 40, name: 'DD Fire main Pump (Fwd)', isOffered: false, overallStatus: 'Pending' },
    { id: 41, name: 'Fresh Water Pump No.1', isOffered: false, overallStatus: 'Pending' },
    { id: 42, name: 'Fresh Water Pump No.2', isOffered: false, overallStatus: 'Pending' },
    { id: 43, name: 'Fresh Water Pump No.3', isOffered: false, overallStatus: 'Pending' },
    { id: 44, name: 'Fuel Oil Transfer Pump No.1', isOffered: false, overallStatus: 'Pending' },
    { id: 45, name: 'Fuel Oil Transfer Pump No.2', isOffered: false, overallStatus: 'Pending' },
    { id: 46, name: 'GT Lub oil Transfer No.1', isOffered: false, overallStatus: 'Pending' },
    { id: 47, name: 'GT Lub oil Transfer No.2', isOffered: false, overallStatus: 'Pending' },
    { id: 48, name: 'GT Booster Pump No.1', isOffered: false, overallStatus: 'Pending' },
    { id: 49, name: 'GT Booster Pump No.2', isOffered: false, overallStatus: 'Pending' },
    { id: 50, name: 'GT Booster Pump No.3', isOffered: false, overallStatus: 'Pending' },
    { id: 51, name: 'GT Booster Pump No.4', isOffered: false, overallStatus: 'Pending' },
    { id: 52, name: 'GTG Fuel Booster No.1(J1)', isOffered: false, overallStatus: 'Pending' },
    { id: 53, name: 'GTG Fuel Booster No.2 (J3)', isOffered: false, overallStatus: 'Pending' },
    { id: 54, name: 'GTG Fuel Booster No.3 (M2)', isOffered: false, overallStatus: 'Pending' },
    { id: 55, name: 'GTG Fuel Booster No.4 (M4)', isOffered: false, overallStatus: 'Pending' },
    { id: 56, name: 'Stabiliser Gear Pump FGTR (Port)', isOffered: false, overallStatus: 'Pending' },
    { id: 57, name: 'Stabiliser Gear Pump FGTR (Stbd)', isOffered: false, overallStatus: 'Pending' },
    { id: 58, name: 'Stabilizer Gear Pump Port (AGTR)', isOffered: false, overallStatus: 'Pending' },
    { id: 59, name: 'Stabilizer Gear Pump Port (AGTR)', isOffered: false, overallStatus: 'Pending' },
    { id: 60, name: 'Stabilizer (SATs)', isOffered: false, overallStatus: 'Pending' },
    { id: 61, name: 'Steering Gear Pump Port', isOffered: false, overallStatus: 'Pending' },
    { id: 62, name: 'Steering Gear Pump Stbd', isOffered: false, overallStatus: 'Pending' },
    { id: 63, name: 'Steering gear harbor trials', isOffered: false, overallStatus: 'Pending' },
    { id: 64, name: 'Steering gear sea trials', isOffered: false, overallStatus: 'Pending' },
    { id: 65, name: 'Ref S/W Pump No.1', isOffered: false, overallStatus: 'Pending' },
    { id: 66, name: 'Ref S/W Pump No.2', isOffered: false, overallStatus: 'Pending' },
    { id: 67, name: 'SW cooling Pump No.1', isOffered: false, overallStatus: 'Pending' },
    { id: 68, name: 'SW cooling Pump No.2', isOffered: false, overallStatus: 'Pending' },
    { id: 69, name: 'SW cooling Pump No.3', isOffered: false, overallStatus: 'Pending' },
    { id: 70, name: 'SW cooling Pump No.4', isOffered: false, overallStatus: 'Pending' },
    { id: 71, name: 'SW cooling Pump No.5', isOffered: false, overallStatus: 'Pending' },
    { id: 72, name: 'SW cooling Pump No.6', isOffered: false, overallStatus: 'Pending' },
    { id: 73, name: 'SW cooling Pump No.7', isOffered: false, overallStatus: 'Pending' },
    { id: 74, name: 'BMA Pump No.1', isOffered: false, overallStatus: 'Pending' },
    { id: 75, name: 'BMA Pump No.2', isOffered: false, overallStatus: 'Pending' },
    { id: 76, name: 'BMA Pump No.3', isOffered: false, overallStatus: 'Pending' },
    { id: 77, name: 'BMA Pump No.4', isOffered: false, overallStatus: 'Pending' },
    { id: 78, name: 'RG Lub oil Transfer No.1', isOffered: false, overallStatus: 'Pending' },
    { id: 79, name: 'RG Lub oil Transfer No.2', isOffered: false, overallStatus: 'Pending' },
    { id: 80, name: 'RG Lub oil centrifuge (FER)', isOffered: false, overallStatus: 'Pending' },
    { id: 81, name: 'RG Lub oil centrifuge (AER)', isOffered: false, overallStatus: 'Pending' },
    { id: 82, name: 'GT Lub oil centrifuge (FER)', isOffered: false, overallStatus: 'Pending' },
    { id: 83, name: 'GT Lub oil centrifuge (AER)', isOffered: false, overallStatus: 'Pending' },
    { id: 84, name: 'DA Fuel Transfer Pump', isOffered: false, overallStatus: 'Pending' },
    { id: 85, name: 'DA LO Priming Pump', isOffered: false, overallStatus: 'Pending' },
    { id: 86, name: 'Fuel centrifuge FER', isOffered: false, overallStatus: 'Pending' },
    { id: 87, name: 'Fuel centrifuge AER', isOffered: false, overallStatus: 'Pending' },
    { id: 88, name: 'Bilge pump', isOffered: false, overallStatus: 'Pending' },
    { id: 89, name: 'AVCAT Recirculating Pump', isOffered: false, overallStatus: 'Pending' },
    { id: 90, name: 'OWS (FER)', isOffered: false, overallStatus: 'Pending' },
    { id: 91, name: 'OWS (AER)', isOffered: false, overallStatus: 'Pending' },
    { id: 92, name: 'RO Plant No.1', isOffered: false, overallStatus: 'Pending' },
    { id: 93, name: 'RO Plant No.2', isOffered: false, overallStatus: 'Pending' },
    { id: 94, name: 'RO Plant No.3', isOffered: false, overallStatus: 'Pending' },
    { id: 95, name: 'RO Plant No.4', isOffered: false, overallStatus: 'Pending' },
    { id: 96, name: 'RO Plant No.5', isOffered: false, overallStatus: 'Pending' },
    { id: 97, name: 'RO Plant No.6', isOffered: false, overallStatus: 'Pending' },
    { id: 98, name: 'RO Plant No.7', isOffered: false, overallStatus: 'Pending' },
    { id: 99, name: 'RO Plant No.8', isOffered: false, overallStatus: 'Pending' },
    { id: 100, name: 'Salvage Pump No.1', isOffered: false, overallStatus: 'Pending' },
    { id: 101, name: 'Salvage Pump No.2', isOffered: false, overallStatus: 'Pending' },
    { id: 102, name: 'Salvage Pump No.3', isOffered: false, overallStatus: 'Pending' },
    { id: 103, name: 'Salvage Pump No.4', isOffered: false, overallStatus: 'Pending' },
    { id: 104, name: 'Salvage Pump No.5', isOffered: false, overallStatus: 'Pending' },
    { id: 105, name: 'Salvage Pump No.6', isOffered: false, overallStatus: 'Pending' },
    { id: 106, name: 'Salvage Pump No.7', isOffered: false, overallStatus: 'Pending' },
    { id: 107, name: 'Salvage Pump No.8', isOffered: false, overallStatus: 'Pending' },
    { id: 108, name: 'Salvage Pump No.9', isOffered: false, overallStatus: 'Pending' },
    { id: 109, name: 'Salvage Pump No.10', isOffered: false, overallStatus: 'Pending' },
    { id: 110, name: 'Salvage Pump No.11', isOffered: false, overallStatus: 'Pending' },
    { id: 111, name: 'Salvage Pump No.12', isOffered: false, overallStatus: 'Pending' },
    { id: 112, name: 'Fuel Stripping Pump No.1', isOffered: false, overallStatus: 'Pending' },
    { id: 113, name: 'Fuel Stripping Pump No.2', isOffered: false, overallStatus: 'Pending' },
    { id: 114, name: 'Pump SR hand fuel oil transfer Pump (AGTR)', isOffered: false, overallStatus: 'Pending' },
    { id: 115, name: 'Pump SR hand fuel oil transfer Pump (Fwd GTR)', isOffered: false, overallStatus: 'Pending' },
    { id: 116, name: 'AVCAT Helo Fueling Pump', isOffered: false, overallStatus: 'Pending' }
  ];

 cycleStatus(item: EquipmentItem): void {
    switch(item.overallStatus) {
      case 'Pending':
        item.overallStatus = 'Approved';
        break;
      case 'Approved':
        item.overallStatus = 'Rejected';
        break;
      case 'Rejected':
        item.overallStatus = 'Pending';
        break;
    }
  }
 equipmentForm: FormGroup;

  equipmentList2: string[] = ['HPAC 1', 
'HPAC 2 ',
'HPAC 3 ',
'DDHPAC', 
'AC Plant 1', 
    'AC Plant 2', 'AC Plant 3', 'AC Plant 4', 'AC Plant 5', 'AC Plant 6',
    'Refrigeration Plant 1', 'Refrigeration Plant 2',
    'Fire main Pump 1', 'Fire main Pump 2', 'Fire main Pump 3', 'Fire main Pump 4',
    'Fire main Pump 5', 'Fire main Pump 6', 'Fire main Pump 7', 'Fire main Pump 8', 'Fire main Pump 9',
    'AC Chilled Water1', 'AC Chilled Water 2', 'AC Chilled Water 3', 'AC Chilled Water 4', 'AC Chilled Water 5', 'AC Chilled Water 6',
    'AC SW Pump 1', 'AC SW Pump 2', 'AC SW Pump 3', 'AC SW Pump 4', 'AC SW Pump 5', 'AC SW Pump 6',
    'Boiler Feed Transfer Pump', 'AVCAT Transfer Pump',
    'DD Fire main Pump (AFT)', 'DD Fire main Pump (Fwd)',
    'Fresh Water Pump 1', 'Fresh Water Pump 2', 'Fresh Water Pump 3',
    'Fuel Oil Transfer Pump 1', 'Fuel Oil Transfer Pump 2',
    'GT Lub oil Transfer 1', 'GT Lub oil Transfer 2',
    'GT Booster Pump 1', 'GT Booster Pump 2', 'GT Booster Pump 3', 'GT Booster Pump 4',
    'GTG Fuel Booster 1(J1)', 'GTG Fuel Booster 2 (J3)', 'GTG Fuel Booster 3 (M2)', 'GTG Fuel Booster 4 (M4)',
    'Stabiliser Gear Pump FGTR (Port)', 'Stabiliser Gear Pump FGTR (Stbd)',
    'Stabilizer Gear Pump Port (AGTR)', 'Stabilizer Gear Pump Stbd (AGTR)', 'Stabilizer (SATs)',
    'Steering Gear Pump Port', 'Steering Gear Pump Stbd',
    'Ref S/W Pump 1', 'Ref S/W Pump 2',
    'SW cooling Pump 1', 'SW cooling Pump 2', 'SW cooling Pump 3', 'SW cooling Pump 4',
    'SW cooling Pump 5', 'SW cooling Pump 6', 'SW cooling Pump 7',
    'BMA Pump 1', 'BMA Pump 2', 'BMA Pump 3', 'BMA Pump 4',
    'RG Lub oil Transfer 1', 'RG Lub oil Transfer 2',
    'RG Lub oil centrifuge (FER)', 'RG Lub oil centrifuge (AER)',
    'GT Lub oil centrifuge (FER)', 'GT Lub oil centrifuge (AER)',
    'DA Fuel Transfer Pump', 'DA LO Priming Pump',
    'Fuel centrifuge FER', 'Fuel centrifuge AER',
    'Bilge pump', 'AVCAT Recirculating Pump',
    'OWS (FER)', 'OWS (AER)',
    'RO Plant 1', 'RO Plant 2', 'RO Plant 3', 'RO Plant 4',
    'RO Plant 5', 'RO Plant 6', 'RO Plant 7', 'RO Plant 8',
    'Salvage Pump 1', 'Salvage Pump 2', 'Salvage Pump 3', 'Salvage Pump 4',
    'Salvage Pump 5', 'Salvage Pump 6', 'Salvage Pump 7', 'Salvage Pump 8',
    'Salvage Pump 9', 'Salvage Pump 10', 'Salvage Pump 11', 'Salvage Pump 12',
    'Fuel Stripping Pump 1', 'Fuel Stripping Pump 2',
    'Pump SR hand fuel oil transfer Pump (AGTR)', 'Pump SR hand fuel oil transfer Pump (Fwd GTR)',
    'AVCAT Helo Fueling Pump'
  ];

  constructor(private fb: FormBuilder) {
    this.equipmentForm = this.fb.group({});
    this.equipmentList.forEach((equip, i) => {
      this.equipmentForm.addControl(`rpm_${i}`, new FormControl(''));
      this.equipmentForm.addControl(`drive_${i}`, new FormControl(''));
      this.equipmentForm.addControl(`nonDrive_${i}`, new FormControl(''));
      this.equipmentForm.addControl(`status_${i}`, new FormControl(''));
    });
  }

  onSubmit() {
    console.log(this.equipmentForm.value);
  }
  // equipmentForm!: FormGroup;

  // constructor(private fb: FormBuilder) {}

  // ngOnInit(): void {
  //   this.equipmentForm = this.fb.group({
  //     hpac1_rpm: [''],
  //     hpac1_driveEnd: [''],
  //     hpac1_nonDriveEnd: [''],
  //     hpac1_status: [''],

  //     hpac2_rpm: [''],
  //     hpac2_driveEnd: [''],
  //     hpac2_nonDriveEnd: [''],
  //     hpac2_status: [''],

  //     hpac3_rpm: [''],
  //     hpac3_driveEnd: [''],
  //     hpac3_nonDriveEnd: [''],
  //     hpac3_status: [''],

  //     ddhpac_rpm: [''],
  //     ddhpac_driveEnd: [''],
  //     ddhpac_nonDriveEnd: [''],
  //     ddhpac_status: [''],

  //     acplant1_rpm: [''],
  //     acplant1_driveEnd: [''],
  //     acplant1_nonDriveEnd: [''],
  //     acplant1_status: ['']
  //   });
  // }

  // submit() {
  //   console.log(this.equipmentForm.value);
  // }



  
}