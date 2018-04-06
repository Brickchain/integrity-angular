import { Component, HostBinding, OnInit } from '@angular/core';
import { EventsService } from './../../src/services/events.service';

@Component({
  selector: 'integrity-angular-demo',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(public events: EventsService) {
    this.events.subscribe('demo', (event: any) => console.log(event));
  }

  ngOnInit(): void {
  }

}
