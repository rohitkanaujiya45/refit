// // equipment.service.ts
// import { Injectable } from '@angular/core';
// import { Equipment } from './equipment.model';
// import { EQUIPMENT_DATA } from './equipment-data';

// @Injectable({
//     providedIn: 'root'
// })
// export class EquipmentService {
//     private equipmentData: Equipment[] = EQUIPMENT_DATA;

//     constructor() { }

//     getEquipmentList(): Equipment[] {
//         return this.equipmentData.map(item => ({ ...item }));
//     }

//     updateEquipment(updatedItem: Equipment): void {
//         const index = this.equipmentData.findIndex(item => 
//             item.ser === updatedItem.ser && item.equipment === updatedItem.equipment
//         );
//         if (index !== -1) {
//             this.equipmentData[index] = { ...updatedItem };
//         }
//     }

//     getTotalMandays(): number {
//         return this.equipmentData.reduce((total, item) => {
//             const mandays = item.manDays ? parseInt(item.manDays) || 0 : 0;
//             return total + mandays;
//         }, 0);
//     }
// }