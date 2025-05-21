// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-equipment-table1',
//   templateUrl: './equipment-table1.component.html',
//   styleUrls: ['./equipment-table1.component.css']
// })
// // export class EquipmentTable1Component implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }




import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-equipment-table1',
  templateUrl: './equipment-table1.component.html',
  styleUrls: ['./equipment-table1.component.css']
})
export class EquipmentTable1Component {
  // Pagination properties
  currentPage: number = 1;
  pageSize: number = 10;
  totalPages: number = 0;
  displayedData: any[] = [];



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

  // meLubOilPumps = [
  //   { id: 9, name: 'ME Lub Oil Priming Pump 1' },
  //   { id: 10, name: 'ME Lub Oil Priming Pump 2' },
  //   { id: 11, name: 'ME Lub Oil Priming Pump 3' },
  //   { id: 12, name: 'ME Lub Oil Priming Pump 4' }
  // ];

  // gbPumps = [
  //   { id: 13, name: 'GB LO Stand by Pump (Port)' },
  //   { id: 14, name: 'GB LO Stand by Pump (Stbd)' },
  //   { id: 15, name: 'GB SW Stand by Pump (Port)' },
  //   { id: 16, name: 'GB SW Stand by Pump (Stbd)' },
  //   { id: 17, name: 'CPP Stand by Pump (Port)' },
  //   { id: 18, name: 'CPP Stand by Pump (Stbd)' }
  // ];

  // steeringGearItems = [
  //   { 
  //     id: 19, 
  //     name: 'Steering Gear Harbour Trials',
  //     clearance: 'To be cleared prior BT',
  //     rowspan: 3,
  //     class: 'multi-line'
  //   },
  //   { 
  //     id: 20, 
  //     name: 'Steering Pump (Port)',
  //     clearance: '',
  //     rowspan: null,
  //     class: ''
  //   },
  //   { 
  //     id: 21, 
  //     name: 'Steering Pump (Stbd)',
  //     clearance: '',
  //     rowspan: null,
  //     class: ''
  //   },
  //   { 
  //     id: 22, 
  //     name: 'Steering Gear Sea Trials',
  //     clearance: 'To be cleared prior SSC 1',
  //     rowspan: 1,
  //     class: ''
  //   }
  // ];

   // Pagination methods
  updateDisplayedData() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedData = this.equipmentData.slice(startIndex, endIndex);
    this.totalPages = Math.ceil(this.equipmentData.length / this.pageSize);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedData();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateDisplayedData();
    }
  }

  updatePageSize() {
    this.currentPage = 1;
    this.updateDisplayedData();
  }

  shouldDisplayRow(index: number): boolean {
    const actualIndex = (this.currentPage - 1) * this.pageSize + index;
    return actualIndex < this.equipmentData.length;
  }

  getActualIndex(index: number): number {
    return (this.currentPage - 1) * this.pageSize + index;
  }

  saveData() {
    console.log('Saved data:', this.equipmentData);
    // Here you would typically send the data to a server
    alert('Data saved successfully!');
  }

  resetForm() {
    if (confirm('Are you sure you want to reset all form data?')) {
      this.equipmentData = this.equipmentData.map(item => ({
        date: '',
        sdc: '',
        vibration: '',
        spm: '',
        mountAttenuation: '',
        performance: '',
        status: 'Pending',
        manDays: 0
      }));
    }
  }
}