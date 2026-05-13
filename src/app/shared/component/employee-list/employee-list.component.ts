import { Component, Input, OnInit } from '@angular/core';
import { Iemployee } from '../../interface/Iemployee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  @Input() getAllemployee!:Iemployee[];

  constructor() { }

  ngOnInit(): void {
  }
  trackByFun(index:number , employee: Iemployee){
    return employee.empId;
  }

}
