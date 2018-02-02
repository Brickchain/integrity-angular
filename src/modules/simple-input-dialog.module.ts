import { NgModule, ModuleWithProviders } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { SimpleInputDialogComponent } from '../components/simple-input-dialog/simple-input-dialog.component';

@NgModule({
  declarations: [
    SimpleInputDialogComponent
  ],
  imports: [
    MatDialogModule
  ],
  exports: [
    SimpleInputDialogComponent
  ]
})
export class SimpleInputDialogModule { }
