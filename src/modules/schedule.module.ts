import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MatIconModule,
  MatSelectModule,
  MatInputModule,
  MatCheckboxModule,
  MatButtonModule } from '@angular/material';
import { OwlDateTimeModule } from 'ng-pick-datetime';
import { OwlMomentDateTimeModule } from 'ng-pick-datetime-moment';
import { ScheduleComponent } from '../components/schedule/schedule.component';

@NgModule({
    imports: [
        MatIconModule,
        FormsModule,
        MatSelectModule,
        CommonModule,
        MatInputModule,
        OwlDateTimeModule,
        OwlMomentDateTimeModule,
        MatCheckboxModule,
        MatButtonModule
    ],
    declarations: [
      ScheduleComponent,
    ],
    exports: [
      ScheduleComponent,
    ]
  })
export class ScheduleModule {

}
