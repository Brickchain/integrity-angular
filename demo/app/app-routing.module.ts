import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TypographyComponent } from './typography/typography.component';
import { QRCodeDemoComponent } from './qr-code-demo/qr-code-demo.component';
import { SectionDemoComponent } from './section-demo/section-demo.component';
import { ScheduleDemoComponent } from './schedule-demo/schedule-demo.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { ClipboardDemoComponent } from './clipboard-demo/clipboard-demo.component';
import { DragAndDropDemoComponent } from './drag-and-drop-demo/drag-and-drop-demo.component';
import { DialogsServiceDemoComponent } from './dialogs-service-demo/dialogs-service-demo.component';
import { EventsServiceDemoComponent } from './events-service-demo/events-service-demo.component';
import { ParentServiceDemoComponent } from './parent-service-demo/parent-service-demo.component';
import { HeaderDemoComponent } from './header-demo/header-demo.component';
import { CardDemoComponent } from './card-demo/card-demo.component';

const appRoutes: Routes = [
  { path: 'get-started', component: GetStartedComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'qr-code-demo', component: QRCodeDemoComponent },
  { path: 'section-demo', component: SectionDemoComponent },
  { path: 'schedule-demo', component: ScheduleDemoComponent },
  { path: 'dialogs-service-demo', component: DialogsServiceDemoComponent },
  { path: 'events-service-demo', component: EventsServiceDemoComponent },
  { path: 'parent-service-demo', component: ParentServiceDemoComponent },
  { path: 'clipboard-demo', component: ClipboardDemoComponent },
  { path: 'drag-and-drop-demo', component: DragAndDropDemoComponent },
  { path: 'header-demo', component: HeaderDemoComponent },
  { path: 'card-demo', component: CardDemoComponent },
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
