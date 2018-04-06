import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';

import { ClipboardModule } from '../../src/modules/clipboard.module';
import { DialogsModule } from '../../src/modules/dialogs.module';
import { DragAndDropModule } from '../../src/modules/drag-and-drop.module';
import { EventsModule } from '../../src/modules/events.module';
import { QRCodeModule } from '../../src/modules/qrcode.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ClipboardModule,
    DialogsModule,
    DragAndDropModule,
    EventsModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
