import { inject, TestBed } from '@angular/core/testing';

import { EventsService } from './../../integrity-angular';

describe('EventsService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EventsService
      ]
    });
  });

  it('pub-sub',
    inject([EventsService],
      (events: EventsService) => {
        events.subscribe('test', (data: any) => expect(data).toEqual('hello world'));
        events.publish('test', 'hello world');
      })
  );

});
