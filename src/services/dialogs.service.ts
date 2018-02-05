import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { QRCodeDialogComponent } from '../components/qrcode-dialog.component';
import { ConfirmDialogComponent } from '../components/confirm-dialog.component';
import { SimpleInputDialogComponent } from '../components/simple-input-dialog.component';

@Injectable()
export class DialogsService {

  constructor(private dialog: MatDialog) { }

  public openQRCode(opts: { title?: string, qrdata: string }): Promise<string> {
    return new Promise((resolve, reject) => {
      const dialogRef = this.dialog.open(QRCodeDialogComponent, {
        data: opts
      });
      dialogRef.afterClosed().subscribe(() => resolve());
    });
  }

  public openConfirm(opts: { title?: string, message: string, yes?: string, no?: string }): Promise<void> {
    return new Promise((resolve, reject) => {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: opts
      });
      dialogRef.afterClosed().subscribe((value) => value ? resolve(value) : reject());
    });
  }

  public openSimpleInput(opts: { title?: string, message: string, value?: string, ok?: string, cancel?: string }): Promise<string> {
    return new Promise((resolve, reject) => {
      const dialogRef = this.dialog.open(SimpleInputDialogComponent, {
        data: opts
      });
      dialogRef.afterClosed().subscribe(value => value ? resolve(value) : reject());
    });
  }

}
