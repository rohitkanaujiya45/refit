import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RestaurentDashComponent } from './restaurent-dash/restaurent-dash.component';
import { SignupComponent } from './signup/signup.component';
// import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { Form2Component } from './form2/form2.component';
import { FormComponent } from './form/form.component';
import { Form3Component } from './form3/form3.component';
import { EquipmentDropdownComponent } from './equipment-dropdown/equipment-dropdown.component';
import { EquipmentTableComponent } from './equipment-table/equipment-table.component';
import { EquipmentTable1Component } from './equipment-table1/equipment-table1.component';
import { EquipmentTable2Component } from './equipment-table2/equipment-table2.component';
import { EquipmentFormComponent } from './equipment-form/equipment-form.component';
import { ThermalTableComponent } from './thermal-table/thermal-table.component';
import { ShaftingVibrationComponent } from './shafting-vibration/shafting-vibration.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login',pathMatch: 'full'
  },
  {
   path: 'login', component: LoginComponent 
  },
 {
   path: 'signup', component: SignupComponent 
 }, 
 {
   path:'restaurent' , component: RestaurentDashComponent
 },
 {
  path:'form' , component: FormComponent},
  {
    path:'table' , component: TableComponent},
    {
      path:'form2' , component: Form2Component},

      {
        path:'form3' , component: Form3Component},
        {
          path:'form4' , component: EquipmentDropdownComponent},
           {
          path:'qqq' , component: EquipmentTableComponent},
          {
          path:'www' , component: EquipmentTable1Component},
          {
          path:'eee' , component: EquipmentTable2Component},
          {
          path:'rrr' , component: EquipmentFormComponent},
          {
          path:'thermal' , component: ThermalTableComponent},
          {
          path:'shaft' , component: ShaftingVibrationComponent},
          
       
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
