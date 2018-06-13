import { Directive, Input, Output, HostListener, EventEmitter } from '@angular/core';
import { ClipboardService } from '../services/clipboard.service';

@Directive({
  selector: '[integrityClipboard]'
})
export class ClipboardDirective {

  @Input() integrityClipboard: string | undefined = undefined;
  @Output() copySuccess: EventEmitter<string> = new EventEmitter();
  @Output() copyError: EventEmitter<Error> = new EventEmitter();

  constructor(private clipboardService: ClipboardService) { }

  @HostListener('click') copyToClipboard(): void {
    if (this.integrityClipboard) {
      this.clipboardService.copy(this.integrityClipboard)
        .then(value => this.copySuccess.emit(value))
        .catch(error => this.copyError.emit(error));
    } else {
      this.copyError.emit(undefined);
    }
  }

}
