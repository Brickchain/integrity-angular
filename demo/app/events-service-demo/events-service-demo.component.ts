import { EventsService } from './../../../src/services/events.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'integrity-angular-events-service-demo',
  templateUrl: './events-service-demo.component.html'
})
export class EventsServiceDemoComponent implements OnInit, OnDestroy {

  public message = 'lo';

  public messages = '';

  private handler: any;

  constructor(public events: EventsService) { }

  ngOnInit() {
    this.handler = (message: any) => this.messages = this.messages + '\r\n' + this.message;
    this.events.subscribe('demo', this.handler);
  }

  ngOnDestroy() {
    this.events.unsubscribe('demo', this.handler);
  }

  sendMessage() {
    this.events.publish('demo', this.message);
  }

}
