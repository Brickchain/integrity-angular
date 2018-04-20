import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TypographyComponent } from './typography/typography.component';
import { QRCodeDemoComponent } from './qr-code-demo/qr-code-demo.component';
import { SectionDemoComponent } from './section-demo/section-demo.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { ConfirmDialogDemoComponent } from './confirm-dialog-demo/confirm-dialog-demo.component';
import { SimpleInputDialogDemoComponent } from './simple-input-dialog-demo/simple-input-dialog-demo.component';
import { QrCodeDialogDemoComponent } from './qr-code-dialog-demo/qr-code-dialog-demo.component';
import { ClipboardDemoComponent } from './clipboard-demo/clipboard-demo.component';
import { DragAndDropDemoComponent } from './drag-and-drop-demo/drag-and-drop-demo.component';

const appRoutes: Routes = [
  { path: 'get-started', component: GetStartedComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'qr-code-demo', component: QRCodeDemoComponent },
  { path: 'section-demo', component: SectionDemoComponent },
  { path: 'confirm-dialog-demo', component: ConfirmDialogDemoComponent },
  { path: 'simple-input-dialog-demo', component: SimpleInputDialogDemoComponent },
  { path: 'qr-code-dialog-demo', component: QrCodeDialogDemoComponent },
  { path: 'clipboard-demo', component: ClipboardDemoComponent },
  { path: 'drag-and-drop-demo', component: DragAndDropDemoComponent },
  { path: '', redirectTo: '/get-started', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true, useHash: true })
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRoutingModule { }
