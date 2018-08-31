import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { OwlDateTimeModule } from 'ng-pick-datetime';
import { OwlMomentDateTimeModule } from 'ng-pick-datetime-moment';
import { ScheduleComponent } from '../components/schedule/schedule.component';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
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
