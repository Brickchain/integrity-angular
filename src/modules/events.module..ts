import { NgModule } from '@angular/core';
import { EventsService } from '../services/events.service';

@NgModule({
  providers: [
    EventsService
  ]
})
export class EventsModule { }
