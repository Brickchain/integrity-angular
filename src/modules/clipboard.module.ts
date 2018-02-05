import { NgModule } from '@angular/core';
import { ClipboardService } from '../services/clipboard.service';
import { ClipboardDirective } from '../directives/clipboard.directive';

@NgModule({
  declarations: [
    ClipboardDirective
  ],
  exports: [
    ClipboardDirective
  ],
  providers: [
    ClipboardService
  ]
})
export class ClipboardModule { }
