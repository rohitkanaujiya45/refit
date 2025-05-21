// src/app/models/equipment.model.ts
export interface Equipment {
  id: number;
  name: string;
  clearanceRequirement: string;
  date?: string;
  sdc?: string;
  vibrationTrials?: string;
  spm?: string;
  mountAttenuation?: string;
  performanceTrials?: string;
  overallStatus?: string;
  manDays?: string;
  section?: string;
}

// src/app/services/equipment.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  private equipmentList: Equipment[] = [
    // Main Engines
    { id: 1, name: 'Port Main Engine', clearanceRequirement: 'To be cleared by DTTT(V)', section: 'Main Engines' },
    { id: 2, name: 'Stbd Main Engine', clearanceRequirement: 'To be cleared by DTTT(V)', section: 'Main Engines' },
    
    // Gear Boxes and Shafting
    { id: 3, name: 'Gear Box (Stbd)', clearanceRequirement: 'a. SDCs.\nb. Shaft Lock Checks.\nc. Torsionmeter Calibration Certificate\nd. POL Report', section: 'Gear Boxes and Shafting' },
    { id: 4, name: 'Gear Box (Port)', clearanceRequirement: 'a. SDCs.\nb. Shaft Lock Checks.\nc. Torsionmeter Calibration Certificate\nd. POL Report', section: 'Gear Boxes and Shafting' },
    { id: 5, name: 'Shafting (Port)', clearanceRequirement: 'a. SDCs.\nb. Shaft Lock Checks.\nc. Torsionmeter Calibration Certificate\nd. POL Report', section: 'Gear Boxes and Shafting' },
    { id: 6, name: 'Shafting (Stbd)', clearanceRequirement: 'a. SDCs.\nb. Shaft Lock Checks.\nc. Torsionmeter Calibration Certificate\nd. POL Report', section: 'Gear Boxes and Shafting' },
    { id: 7, name: 'CPP (Port)', clearanceRequirement: 'a. SDCs.\nb. Shaft Lock Checks.\nc. Torsionmeter Calibration Certificate\nd. POL Report', section: 'Gear Boxes and Shafting' },
    { id: 8, name: 'CPP(Stbd)', clearanceRequirement: 'a. SDCs.\nb. Shaft Lock Checks.\nc. Torsionmeter Calibration Certificate\nd. POL Report', section: 'Gear Boxes and Shafting' },
    
    // Lub Oil Priming Pumps
    { id: 9, name: 'ME Lub Oil Priming Pump 1', clearanceRequirement: 'To be cleared prior BT', section: 'Lub Oil Priming Pumps' },
    { id: 10, name: 'ME Lub Oil Priming Pump 2', clearanceRequirement: 'To be cleared prior BT', section: 'Lub Oil Priming Pumps' },
    { id: 11, name: 'ME Lub Oil Priming Pump 3', clearanceRequirement: 'To be cleared prior BT', section: 'Lub Oil Priming Pumps' },
    { id: 12, name: 'ME Lub Oil Priming Pump 4', clearanceRequirement: 'To be cleared prior BT', section: 'Lub Oil Priming Pumps' },
    
    // GB and CPP Standby Pumps
    { id: 13, name: 'GB LO Stand by Pump (Port)', clearanceRequirement: 'To be cleared prior BT', section: 'GB and CPP Standby Pumps' },
    { id: 14, name: 'GB LO Stand by Pump (Stbd)', clearanceRequirement: 'To be cleared prior BT', section: 'GB and CPP Standby Pumps' },
    { id: 15, name: 'GB SW Stand by Pump (Port)', clearanceRequirement: 'To be cleared prior BT', section: 'GB and CPP Standby Pumps' },
    { id: 16, name: 'GB SW Stand by Pump (Stbd)', clearanceRequirement: 'To be cleared prior BT', section: 'GB and CPP Standby Pumps' },
    { id: 17, name: 'CPP Stand by Pump (Port)', clearanceRequirement: 'To be cleared prior BT', section: 'GB and CPP Standby Pumps' },
    { id: 18, name: 'CPP Stand by Pump (Stbd)', clearanceRequirement: 'To be cleared prior BT', section: 'GB and CPP Standby Pumps' },
    
    // Steering Gear
    { id: 19, name: 'Steering Gear Harbour Trials', clearanceRequirement: 'To be cleared prior BT', section: 'Steering Gear' },
    { id: 20, name: 'Steering Pump (Port)', clearanceRequirement: 'To be cleared prior BT', section: 'Steering Gear' },
    { id: 21, name: 'Steering Pump (Stbd)', clearanceRequirement: 'To be cleared prior BT', section: 'Steering Gear' },
    { id: 22, name: 'Steering Gear Sea Trials', clearanceRequirement: 'To be cleared prior SSC 1', section: 'Steering Gear' },
    
    // Stabiliser
    { id: 23, name: 'Stabiliser Harbour Trials', clearanceRequirement: 'To be cleared prior SSC 1', section: 'Stabiliser' },
    { id: 24, name: 'Stabiliser Pump (Port)', clearanceRequirement: 'To be cleared prior SSC 1', section: 'Stabiliser' },
    { id: 25, name: 'Stabiliser Pump (Stbd)', clearanceRequirement: 'To be cleared prior SSC 1', section: 'Stabiliser' },
    { id: 26, name: 'Stabiliser Sea Trials', clearanceRequirement: 'To be cleared prior SSC 2', section: 'Stabiliser' },
    
    // HPAC System
    { id: 27, name: 'HPAC 1', clearanceRequirement: '02 HPAC to be cleared prior BT', section: 'HPAC System' },
    { id: 28, name: 'HPAC 2', clearanceRequirement: '02 HPAC to be cleared prior BT', section: 'HPAC System' },
    { id: 29, name: 'HPAC 3', clearanceRequirement: '02 HPAC to be cleared prior BT', section: 'HPAC System' },
    { id: 30, name: 'Compressed Air System', clearanceRequirement: 'To be cleared prior BT', section: 'HPAC System' },
    
    // AC Plant and System
    { id: 31, name: 'AC Plant 1', clearanceRequirement: 'At least 02 AC Plants to be cleared prior BT', section: 'AC Plant and System' },
    { id: 32, name: 'AC Plant 2', clearanceRequirement: 'At least 02 AC Plants to be cleared prior BT', section: 'AC Plant and System' },
    { id: 33, name: 'AC Plant 3', clearanceRequirement: 'At least 02 AC Plants to be cleared prior BT', section: 'AC Plant and System' },
    
    // Add more equipment as needed...
  ];

  constructor() { }

  getAllEquipment(): Equipment[] {
    return this.equipmentList;
  }

  getEquipmentById(id: number): Equipment | undefined {
    return this.equipmentList.find(eq => eq.id === id);
  }

  updateEquipment(equipment: Equipment): void {
    const index = this.equipmentList.findIndex(eq => eq.id === equipment.id);
    if (index !== -1) {
      this.equipmentList[index] = equipment;
    }
  }

  getSections(): string[] {
    const sections = new Set(this.equipmentList.map(eq => eq.section || ''));
    return Array.from(sections).filter(section => section);
  }

  getEquipmentBySection(section: string): Equipment[] {
    return this.equipmentList.filter(eq => eq.section === section);
  }
}