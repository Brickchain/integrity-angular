import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { QrCodeDialogComponent } from '../components/qr-code-dialog/qr-code-dialog.component';

@NgModule({
  declarations: [
    QrCodeDialogComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  exports: [
    QrCodeDialogComponent
  ]
})
export class QrCodeDialogModule { }
