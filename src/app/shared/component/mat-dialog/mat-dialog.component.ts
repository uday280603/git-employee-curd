import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mat-dialog',
  templateUrl: './mat-dialog.component.html',
  styleUrls: ['./mat-dialog.component.scss']
})
export class MatDialogComponent implements OnInit {

  constructor(private _matDialogRef : MatDialogRef<MatDialogComponent>) { }

  ngOnInit(): void {
  }

  onClose(flag : boolean){
    this._matDialogRef.close(flag)

  }

}
