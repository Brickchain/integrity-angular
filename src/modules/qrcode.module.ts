import { NgModule } from '@angular/core';
import { QRCodeComponent } from '../components/qrcode.component';

@NgModule({
  declarations: [
    QRCodeComponent,
  ],
  exports: [
    QRCodeComponent,
  ]
})
export class QRCodeModule {
}
