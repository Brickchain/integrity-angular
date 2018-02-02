import { NgModule, ModuleWithProviders } from '@angular/core';

import { EventsService } from '../services/events.service';

@NgModule()
export class EventsModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: EventsModule,
      providers: [EventsService]
    };
  }
}
