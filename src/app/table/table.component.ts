import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mainData:any[]=[];
  showDetails=false;
  table: any[] = [
    { name: 'John', type: 'Gold', amount: 5000 },
    { name: 'Alice', type: 'Silver', amount: 3000 },
    { name: 'Bob', type: 'Bronze', amount: 2000 },
    { name: 'David', type: 'Gold', amount: 8000 },
    { name: 'Eva', type: 'Silver', amount: 4000 },
    { name: 'Frank', type: 'Bronze', amount: 1000 },
    { name: 'Grace', type: 'Gold', amount: 7500 },
    { name: 'Helen', type: 'Silver', amount: 3200 },
    { name: 'Ian', type: 'Bronze', amount: 2800 },
    { name: 'Jane', type: 'Gold', amount: 9200 }
  ];

  otherData = [
    { info: 'Extra Info 1', description: 'Details A' },
    { info: 'Extra Info 2', description: 'Details B' }
  ];
  

  viewData(row:any){
    this.showDetails=!this.showDetails;

  }
  
}
