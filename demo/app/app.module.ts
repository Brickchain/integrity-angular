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
import {MatSelectModule} from '@angular/material/select';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ClipboardModule } from '../../src/modules/clipboard.module';
import { DialogsModule } from '../../src/modules/dialogs.module';
import { DragAndDropModule } from '../../src/modules/drag-and-drop.module';
import { EventsModule } from '../../src/modules/events.module';
import { QRCodeModule } from '../../src/modules/qrcode.module';
import { SectionModule } from '../../src/modules/section.module';

import { TypographyComponent } from './typography/typography.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { QRCodeDemoComponent } from './qr-code-demo/qr-code-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    TypographyComponent,
    QRCodeDemoComponent
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
    ClipboardModule,
    DialogsModule,
    DragAndDropModule,
    EventsModule,
    QRCodeModule,
    SectionModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
