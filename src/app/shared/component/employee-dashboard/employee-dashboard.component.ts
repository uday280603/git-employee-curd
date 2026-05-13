import { Component, OnInit } from '@angular/core';
import { Iemployee } from '../../interface/Iemployee';
import { employeeData } from '../../const/employeeData';
import { SnackBarService } from '../../service/snackBar.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss'],
})
export class EmployeeDashboardComponent implements OnInit {
  employeeArr!: Iemployee[];

  constructor(private _snackBar: SnackBarService) {}

  ngOnInit(): void {
    this.employeeArr = employeeData;
  }

  getNewEmployee(empObj: Iemployee) {
    this.employeeArr.unshift(empObj);
    this._snackBar.openSnackBar(
      `New Employee ${empObj.empName} is Added Successfully..!`,
    );
  }
}
