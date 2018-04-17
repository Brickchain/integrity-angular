import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'integrity-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input() public title = '';
  @Input() public collapsible = false;
  @Input() public cid = '';

  public collapsed = false;

  constructor() { }

  ngOnInit() {
    console.log(this.title, this.cid, this.collapsible);
  }

  toggle() {
    this.collapsed = !this.collapsed;
    console.log(this.collapsed);
  }

}
