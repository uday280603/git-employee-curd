import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Iemployee } from '../../interface/Iemployee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  isInEditmode: boolean = false;

  @ViewChild('empName') empName!: ElementRef;
  @ViewChild('empSalary') empSalary!: ElementRef;
  @ViewChild('isActive') isActive!: ElementRef;

  @Output() emitNewemployeeObj: EventEmitter<Iemployee> =
    new EventEmitter<Iemployee>();

  constructor() {}

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
}
