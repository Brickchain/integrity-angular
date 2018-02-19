import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'integrity-qrcode-dialog',
  template: `
    <h2 mat-dialog-title *ngIf="data.title">{{ data.title }}</h2>
    <mat-dialog-content>
      <integrity-qrcode
        [qrdata]="data.qrdata"
        [integrityClipboard]="data.qrdata"
        (copySuccess)="showCopySuccess($event)">
      </integrity-qrcode>
    </mat-dialog-content>`,
  styles: [`
    mat-dialog-content {
      text-align: center;
    }
  `]
})
export class QRCodeDialogComponent {

  constructor(public dialogRef: MatDialogRef<QRCodeDialogComponent>, public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  showCopySuccess(value: string) {
    this.snackBar.open(
      this.data.copySuccessMessage ? this.data.copySuccessMessage : `Copied '${value}' to clipboard`, '',
      { duration: 2000 }
    );
  }

}
