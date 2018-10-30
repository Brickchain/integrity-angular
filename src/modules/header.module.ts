import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from '../components/header/header.component';

@NgModule({
    imports: [
      CommonModule,
      MatIconModule,
      MatButtonModule
    ],
    declarations: [
      HeaderComponent,
    ],
    exports: [
      HeaderComponent,
    ]
  })
export class HeaderModule {

}
