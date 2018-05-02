import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { SectionComponent } from '../components/section/section.component';
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MatIconModule
  ],
  exports: [
    SectionComponent,
  ],
  declarations: [
    SectionComponent,
  ],
  providers: [
    UniqueSelectionDispatcher
  ]
})
export class SectionModule {
}
