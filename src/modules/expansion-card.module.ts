import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ExpansionCardComponent } from '../components/expansion-card/expansion-card.component';

@NgModule({
    imports: [
      CommonModule,
      MatButtonModule,
      MatIconModule
    ],
    declarations: [
      ExpansionCardComponent
    ],
    exports: [
      ExpansionCardComponent
    ]
  })
export class ExpansionCardModule {

}
