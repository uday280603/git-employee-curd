import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Iemployee } from '../../interface/Iemployee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit, OnChanges {
  @Input() editObj!: Iemployee;
  isInEditmode: boolean = false;

  @ViewChild('empName') empName!: ElementRef;
  @ViewChild('empSalary') empSalary!: ElementRef;
  @ViewChild('isActive') isActive!: ElementRef;

  @Output() emitNewemployeeObj: EventEmitter<Iemployee> =
    new EventEmitter<Iemployee>();

  @Output() emitUpdatedObj: EventEmitter<Iemployee> =
    new EventEmitter<Iemployee>();

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes['editObj'].currentValue) {
      this.isInEditmode = true;
      this.empName.nativeElement.value = this.editObj.empName;
      this.empSalary.nativeElement.value = this.editObj.empSalary;
      this.isActive.nativeElement.value = this.editObj.isActive;
    }
  }

  ngOnInit(): void {}

  onAddEmployee() {
    let val1: string = this.empName.nativeElement.value;
    let val2: number = this.empSalary.nativeElement.value;

    if (val1.length > 0) {
      let NEW_EMPLOYEE: Iemployee = {
        empId: Date.now(),
        empName: this.empName.nativeElement.value,
        empSalary: this.empSalary.nativeElement.value,
        isActive: this.isActive.nativeElement.value === 'true' ? true : false,
      };

      console.log(NEW_EMPLOYEE);

      this.emitNewemployeeObj.emit(NEW_EMPLOYEE);
      this.empName.nativeElement.value = '';
      this.empSalary.nativeElement.value = '';
      this.isActive.nativeElement.value = true;
    }
  }

  onUpdateEmployee() {
    let UPDATE_OBJ: Iemployee = {
      empId: this.editObj.empId,
      empName: this.empName.nativeElement.value,
      empSalary: this.empSalary.nativeElement.value,
      isActive: this.isActive.nativeElement.value === 'true' ? true : false,
    };

    // console.log(UPDATE_OBJ);
    this.emitUpdatedObj.emit(UPDATE_OBJ);
    this.empName.nativeElement.value = '';
    this.empSalary.nativeElement.value = '';
    this.isActive.nativeElement.value = true;
    this.isInEditmode = false;
  }
}
