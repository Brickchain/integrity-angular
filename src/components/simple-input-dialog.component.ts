import { Component, Inject, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'integrity-simple-input-dialog',
  template: `
  <h2 mat-dialog-title>{{ data.title || "Enter value" }}</h2>
  <div mat-dialog-content>
    <p>{{ data.message }}</p>
    <mat-form-field>
      <input matInput [(ngModel)]="data.value" cdkFocusInitial>
    </mat-form-field>
  </div>
  <div mat-dialog-actions>
    <button mat-raised-button [mat-dialog-close]="null">{{ data.cancel || "Cancel" }}</button>
    <button mat-raised-button [mat-dialog-close]="data.value" color="accent">{{ data.ok || "OK" }}</button>
  </div>
`})
export class SimpleInputDialogComponent {

  constructor(public dialogRef: MatDialogRef<SimpleInputDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  @HostListener('keydown.enter')
  public onEnter(): void {
    this.dialogRef.close(this.data.value);
  }

}
