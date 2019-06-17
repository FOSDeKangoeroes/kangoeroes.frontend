import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pick-column-dialog',
  templateUrl: './pick-column-dialog.component.html',
  styleUrls: ['./pick-column-dialog.component.scss']
})
export class PickColumnDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PickColumnDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onCancel() {
    this.dialogRef.close();
  }

}
