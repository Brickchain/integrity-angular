import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'integrity-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() public color = 'darkblue';
  @Input() public title = '';
  @Input() public text = '';
  @Input() public buttonText = '';

  @Output() buttonClicked = new EventEmitter<any>();

  constructor() { }

  onButtonClicked(event: any) {
    this.buttonClicked.emit(event);
  }

}
