import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ClipboardModule } from '../../src/modules/clipboard.module';
import { DialogsModule } from '../../src/modules/dialogs.module';
import { DragAndDropModule } from '../../src/modules/drag-and-drop.module';
import { EventsModule } from '../../src/modules/events.module';
import { QRCodeModule } from '../../src/modules/qrcode.module';
import { SectionModule } from '../../src/modules/section.module';
import { ScheduleModule } from '../../src/modules/schedule.module';
import { HeaderModule } from '../../src/modules/header.module';
import { CardModule } from '../../src/modules/card.module';
import { ExpansionCardModule } from '../../src/modules/expansion-card.module';

import { TypographyComponent } from './typography/typography.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
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
import { ExpansionCardDemoComponent } from './expansion-card-demo/expansion-card-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    TypographyComponent,
    QRCodeDemoComponent,
    SectionDemoComponent,
    ScheduleDemoComponent,
    GetStartedComponent,
    ClipboardDemoComponent,
    DragAndDropDemoComponent,
    DialogsServiceDemoComponent,
    EventsServiceDemoComponent,
    ParentServiceDemoComponent,
    HeaderDemoComponent,
    CardDemoComponent,
    ExpansionCardDemoComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatCheckboxModule,
    ClipboardModule,
    DialogsModule,
    DragAndDropModule,
    EventsModule,
    QRCodeModule,
    SectionModule,
    ScheduleModule,
    AppRoutingModule,
    HeaderModule,
    CardModule,
    ExpansionCardModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
