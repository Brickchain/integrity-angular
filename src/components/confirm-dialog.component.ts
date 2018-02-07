import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'integrity-confirmation-dialog',
  template: `
  <h2 mat-dialog-title *ngIf="data.title">{{ data.title }}</h2>
  <mat-dialog-content *ngIf="data.message">
    <p>{{ data.message }}</p>
  </mat-dialog-content>
  <mat-dialog-actions>
    <button mat-raised-button [mat-dialog-close]="false">{{ data.no || "No" }}</button>
    <button mat-raised-button [mat-dialog-close]="true" color="accent">{{ data.yes || "Yes" }}</button>
  </mat-dialog-actions>
`})
export class ConfirmDialogComponent {

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

}
