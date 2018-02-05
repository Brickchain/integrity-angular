import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { QRCodeModule } from './qrcode.module';
import { ClipboardModule } from './clipboard.module';
import { QRCodeDialogComponent } from '../components/qrcode-dialog.component';
import { ConfirmDialogComponent } from '../components/confirm-dialog.component';
import { SimpleInputDialogComponent } from '../components/simple-input-dialog.component';
import { DialogsService } from '../services/dialogs.service';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    QRCodeModule,
    ClipboardModule
  ],
  exports: [
    QRCodeDialogComponent,
    ConfirmDialogComponent,
    SimpleInputDialogComponent
  ],
  declarations: [
    QRCodeDialogComponent,
    ConfirmDialogComponent,
    SimpleInputDialogComponent
  ],
  providers: [
    DialogsService
  ],
  entryComponents: [
    QRCodeDialogComponent,
    ConfirmDialogComponent,
    SimpleInputDialogComponent
  ],
})
export class DialogsModule { }
