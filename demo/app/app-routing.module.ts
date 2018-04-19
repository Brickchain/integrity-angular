import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TypographyComponent } from './typography/typography.component';
import { QRCodeDemoComponent } from './qr-code-demo/qr-code-demo.component';
import { SectionDemoComponent } from './section-demo/section-demo.component';

const appRoutes: Routes = [
  { path: 'typography', component: TypographyComponent },
  { path: 'qr-code-demo', component: QRCodeDemoComponent },
  { path: 'section', component: SectionDemoComponent },
  { path: '', redirectTo: '/typography', pathMatch: 'full' },
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
