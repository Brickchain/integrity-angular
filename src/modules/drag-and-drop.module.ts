import { NgModule, ModuleWithProviders } from '@angular/core';

import { DragAndDropDirective } from '../directives/drag-and-drop.directive';

@NgModule({
  declarations: [
    DragAndDropDirective
  ],
  exports: [
    DragAndDropDirective
  ]
})
export class DragAndDropModule { }
