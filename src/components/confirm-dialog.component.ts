import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'integrity-confirmation-dialog',
  template: `
  <h2 mat-dialog-title>{{ data.title || "Confirm" }}</h2>
  <div mat-dialog-content>
    <p>{{ data.message }}</p>
  </div>
  <div mat-dialog-actions>
    <button mat-raised-button [mat-dialog-close]="true" color="accent">{{ data.yes || "Yes" }}</button>
    <button mat-raised-button [mat-dialog-close]="false">{{ data.no || "No" }}</button>
  </div>
`})
export class ConfirmDialogComponent {

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

}
