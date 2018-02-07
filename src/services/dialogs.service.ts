import { Injectable, TemplateRef } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { QRCodeDialogComponent } from '../components/qrcode-dialog.component';
import { ConfirmDialogComponent } from '../components/confirm-dialog.component';
import { SimpleInputDialogComponent } from '../components/simple-input-dialog.component';

@Injectable()
export class DialogsService {

  constructor(private dialog: MatDialog) { }

  public openQRCode(opts: { title?: string, qrdata: string }): Promise<void> {
    return this.dialog.open(QRCodeDialogComponent, { data: opts }).afterClosed().toPromise();
  }

  public openConfirm(opts: { title?: string, message: string, yes?: string, no?: string }): Promise<boolean> {
    return this.dialog.open(ConfirmDialogComponent, { data: opts }).afterClosed().toPromise();
  }

  public openSimpleInput(opts: { title?: string, message: string, value?: string, ok?: string, cancel?: string }): Promise<string | null> {
    return this.dialog.open(SimpleInputDialogComponent, { data: opts }).afterClosed().toPromise();
  }

}
