// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-equipment-form',
//   templateUrl: './equipment-form.component.html',
//   styleUrls: ['./equipment-form.component.css']
// })
// export class EquipmentFormComponent implements OnInit {
//   equipmentForm!: FormGroup;

//   systems: string[] = [
//     'Fire main System',
//     'Air compressor System',
//     'Lub Oil System',
//     'Fuel System',
//     'Bilge Pumping out system',
//     'Ballast System',
//     'Chilled water system',
//     'Sea water system',
//     'Engine room sprinkling system',
//     'MFFS'
//   ];

//   constructor(private fb: FormBuilder) {}

//   ngOnInit(): void {
//     const formControls: any = {};
//     for (let i = 1; i <= 10; i++) {
//       formControls[`valve${i}`] = [''];
//       formControls[`desc${i}`] = [''];
//       formControls[`ipms${i}`] = [''];
//       formControls[`dl${i}`] = [''];
//       formControls[`status${i}`] = [''];
//       formControls[`remark${i}`] = [''];
//     }

//     this.equipmentForm = this.fb.group(formControls);
//   }

//   submitForm() {
//     console.log(this.equipmentForm.value);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-equipment-form',
  templateUrl: './equipment-form.component.html',
  styleUrls: ['./equipment-form.component.css']
})
export class EquipmentFormComponent implements OnInit {
  equipmentForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.equipmentForm = this.fb.group({
      valve1: [''], desc1: [''], ipms1: [''], dl1: [''], status1: [''], remark1: [''],
      valve2: [''], desc2: [''], ipms2: [''], dl2: [''], status2: [''], remark2: [''],
      valve3: [''], desc3: [''], ipms3: [''], dl3: [''], status3: [''], remark3: [''],
      valve4: [''], desc4: [''], ipms4: [''], dl4: [''], status4: [''], remark4: [''],
      valve5: [''], desc5: [''], ipms5: [''], dl5: [''], status5: [''], remark5: [''],
      valve6: [''], desc6: [''], ipms6: [''], dl6: [''], status6: [''], remark6: [''],
      valve7: [''], desc7: [''], ipms7: [''], dl7: [''], status7: [''], remark7: [''],
      valve8: [''], desc8: [''], ipms8: [''], dl8: [''], status8: [''], remark8: [''],
      valve9: [''], desc9: [''], ipms9: [''], dl9: [''], status9: [''], remark9: [''],
      valve10: [''], desc10: [''], ipms10: [''], dl10: [''], status10: [''], remark10: ['']
    });
  }


}
