import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'integrity-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  @Input() public title = '';

  constructor() { }

  ngOnInit() {
  }

}
