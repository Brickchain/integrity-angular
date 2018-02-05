import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'integrity-qrcode-dialog',
  template: `
  <h2 mat-dialog-title>{{ data.title || "QR Code" }}</h2>
  <div mat-dialog-content>
    <integrity-qrcode
      [qrdata]="data.qrdata"
      [integrityClipboard]="data.qrdata"
      (copySuccess)="showCopySuccess($event)">
    </integrity-qrcode>
  </div>
`})
export class QRCodeDialogComponent {

  constructor(public dialogRef: MatDialogRef<QRCodeDialogComponent>, public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  showCopySuccess(value: string) {
    this.snackBar.open(`Copied ${value} to clipboard`, '', { duration: 2000 });
  }

}
