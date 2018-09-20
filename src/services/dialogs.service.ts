import { Injectable, TemplateRef } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { QRCodeDialogComponent } from '../components/qrcode-dialog.component';
import { ConfirmDialogComponent } from '../components/confirm-dialog.component';
import { SimpleInputDialogComponent } from '../components/simple-input-dialog.component';

@Injectable()
export class DialogsService {

  constructor(private dialog: MatDialog) { }

  public openQRCode(opts: { title?: string, qrdata: string, copySuccessMessage?: string }, materialOptions?: Object): Promise<void> {
    const options = { data: opts, ...materialOptions };
    return this.dialog.open(QRCodeDialogComponent, options).afterClosed().toPromise();
  }

  public openConfirm(opts: {
    title?: string,
    message: string,
    ok?: string,
    cancel?: string,
    okColor?: string,
    cancelColor?: string,
    okIcon?: string,
    cancelIcon?: string
    },
    materialOptions?: Object): Promise<boolean> {
    const options = { data: opts, panelClass: 'integrity-modal', ...materialOptions };
    return this.dialog.open(ConfirmDialogComponent, options).afterClosed().toPromise();
  }

  public openSimpleInput(opts: {
    title?: string,
    message: string,
    value?: string,
    ok?: string,
    cancel?: string,
    okColor?: string,
    cancelColor?: string,
    okIcon?: string,
    cancelIcon?: string
    },
    materialOptions?: Object): Promise<string | null> {
    const options = { data: opts, panelClass: 'integrity-modal', ...materialOptions };
    return this.dialog.open(SimpleInputDialogComponent, options)
    .afterClosed().toPromise();
  }
}
