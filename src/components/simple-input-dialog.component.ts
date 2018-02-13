import { Component, Inject, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'integrity-simple-input-dialog',
  template: `
  <h2 mat-dialog-title *ngIf="data.title">{{ data.title }}</h2>
  <mat-dialog-content>
    <p *ngIf="data.message">{{ data.message }}</p>
    <mat-form-field>
      <input matInput [placeholder]="data.placeholder" [(ngModel)]="data.value" cdkFocusInitial>
    </mat-form-field>
  </mat-dialog-content>
  <mat-dialog-actions>
    <button mat-button [mat-dialog-close]="null">{{ data.cancel || "Cancel" }}</button>
    <button mat-raised-button [mat-dialog-close]="data.value" color="accent">{{ data.ok || "OK" }}</button>
  </mat-dialog-actions>
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
