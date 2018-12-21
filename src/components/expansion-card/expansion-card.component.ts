import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'integrity-expansion-card',
  templateUrl: './expansion-card.component.html',
  styleUrls: ['./expansion-card.component.scss']
})
export class ExpansionCardComponent {

  @Input() public title = '';
  @Input() public description = '';
  @Input() public image = '';
  @Input() public icon = '';
  @Input() public accent = 'blue';
  @Input() public error = '';
  @Input() public isDefault = '';
  @Input() public sections: Array<IExpansionCardSection> = [];

  @Output() bottomButtonClicked = new EventEmitter<any>();

  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  onBottomButtonClicked(event: any) {
    this.bottomButtonClicked.emit(event);
  }
}

export interface IExpansionCardSection {
  fields: Array<IExpansionCardSectionField>;
}

export interface IExpansionCardSectionField {
  name: string;
  values: Array<string>;
}
