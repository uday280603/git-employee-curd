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

  editObjToPatch!: Iemployee;

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

  getRemoveId(removeID: number) {
    let getIndex = this.employeeArr.findIndex((e) => e.empId === removeID);

    this.employeeArr.splice(getIndex, 1);
       this._snackBar.openSnackBar(
      ` Employee with Id ${removeID} is Removed Successfully..!`,
    );
  }

  getEditObj(editObj: Iemployee) {
    this.editObjToPatch = editObj;
  }
  getUpdatedObj(updatedObj: Iemployee) {
    let getIndex = this.employeeArr.findIndex(
      (e) => e.empId === updatedObj.empId,
    );
    this.employeeArr[getIndex] = updatedObj;
          this._snackBar.openSnackBar(
      ` Employee with Id ${updatedObj.empId} is Updated Successfully..!`,
    );
  }
}
