import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AppComponent } from './app.component';
import { EmployeeDashboardComponent } from './shared/component/employee-dashboard/employee-dashboard.component';
import { EmployeeFormComponent } from './shared/component/employee-form/employee-form.component';
import { EmployeeListComponent } from './shared/component/employee-list/employee-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { MatDialogComponent } from './shared/component/mat-dialog/mat-dialog.component';
import { MatButtonModule } from "@angular/material/button";


@NgModule({
  declarations: [
    AppComponent,
    EmployeeDashboardComponent,
    EmployeeFormComponent,
    EmployeeListComponent,
    MatDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
