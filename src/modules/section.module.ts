import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SectionComponent } from '../components/section/section.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    SectionComponent,
  ],
  declarations: [
    SectionComponent,
  ]
})
export class SectionModule {
}
