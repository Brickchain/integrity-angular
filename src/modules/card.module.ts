import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from '../components/card/card.component';

@NgModule({
    imports: [
      CommonModule,
      MatButtonModule
    ],
    declarations: [
      CardComponent,
    ],
    exports: [
      CardComponent,
    ]
  })
export class CardModule {

}
