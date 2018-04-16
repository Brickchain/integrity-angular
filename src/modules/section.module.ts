import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SectionComponent } from '../components/section/section.component';

@NgModule({
  imports: [
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
