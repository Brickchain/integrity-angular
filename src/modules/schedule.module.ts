import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatInputModule, MatCheckboxModule, MatButtonModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ScheduleComponent } from '../components/schedule/schedule.component';
import { OwlDateTimeModule } from 'ng-pick-datetime';
import { OwlMomentDateTimeModule } from 'ng-pick-datetime-moment';

@NgModule({
    imports: [
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        CommonModule,
        BrowserModule,
        MatDatepickerModule,
        MatNativeDateModule,
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
