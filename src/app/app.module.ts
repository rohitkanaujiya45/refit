import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurentDashComponent } from './restaurent-dash/restaurent-dash.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormComponent } from './form/form.component';
import { NgSelectModule } from '@ng-select/ng-select';
// 🛠 Missing imports added:
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button';
import { TableComponent } from './table/table.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { EquipmentDropdownComponent } from './equipment-dropdown/equipment-dropdown.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { EquipmentTableComponent } from './equipment-table/equipment-table.component';
import { EquipmentTable1Component } from './equipment-table1/equipment-table1.component';
// import { EquipmentDropdownComponent } from './equipment-dropdown/equipment-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurentDashComponent,
    LoginComponent,
    SignupComponent,
    FormComponent,
    TableComponent,
    Form2Component,
    Form3Component,
    EquipmentDropdownComponent,
    EquipmentTableComponent,
    EquipmentTable1Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule, 
    MatButtonModule,
    NgSelectModule,
    BrowserAnimationsModule,
    DragDropModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
