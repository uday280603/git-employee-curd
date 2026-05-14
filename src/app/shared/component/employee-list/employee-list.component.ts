import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Iemployee } from '../../interface/Iemployee';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatDialogComponent } from '../mat-dialog/mat-dialog.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  @Input() getAllemployee!: Iemployee[];

  @Output() emitRemoveId: EventEmitter<number> = new EventEmitter<number>();
  @Output() emitEditObj: EventEmitter<Iemployee> =
    new EventEmitter<Iemployee>();

  constructor(private _matDialog: MatDialog) {}

  ngOnInit(): void {}
  trackByFun(index: number, employee: Iemployee) {
    return employee.empId;
  }

onRemoveEmployee(id: number): void {

  const config = new MatDialogConfig();

  config.width = '400px';
  config.disableClose = true;

  const matDialogRef = this._matDialog.open(
    MatDialogComponent,
    config
  );

  matDialogRef.afterClosed().subscribe((getConfirmation: boolean) => {

    if (getConfirmation === true) {
      this.emitRemoveId.emit(id);
    }

  });
}
  onEditemployee(editObj: Iemployee) {
    this.emitEditObj.emit(editObj);
  }
}
