import { NgModule, ModuleWithProviders } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { ConfirmationDialogComponent } from '../components/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    ConfirmationDialogComponent
  ],
  imports: [
    MatDialogModule
  ],
  exports: [
    ConfirmationDialogComponent
  ]
})
export class ConfirmationDialogModule { }
