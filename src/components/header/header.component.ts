import { Component, Input, Output, EventEmitter } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'integrity-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() public title = '';
  @Input() public border = 'bottom';
  @Input() public rightButtonIcon = 'settings';

  private _withBackButton = false;
  @Input()
  get withBackButton() { return this._withBackButton; }
  set withBackButton(value: any) { this._withBackButton = coerceBooleanProperty(value); }

  private _withRightButton = false;
  @Input()
  get withRightButton() { return this._withRightButton; }
  set withRightButton(value: any) { this._withRightButton = coerceBooleanProperty(value); }

  @Output() backButtonClicked = new EventEmitter<any>();
  @Output() rightButtonClicked = new EventEmitter<any>();

  constructor() { }

  back(event: any) {
    this.backButtonClicked.emit(event);
  }

  right(event: any) {
    this.rightButtonClicked.emit(event);
  }

}
