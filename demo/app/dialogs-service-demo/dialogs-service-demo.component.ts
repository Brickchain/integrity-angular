import { Component, OnInit } from '@angular/core';
import { DialogsService } from '../../../src/services/dialogs.service';

@Component({
  selector: 'integrity-angular-dialogs-service-demo',
  templateUrl: './dialogs-service-demo.component.html'
})
export class DialogsServiceDemoComponent {

  public input: string | null = '';

  constructor(private dialogs: DialogsService) { }

  showConfirmationDialog() {
    const opts = {
      'title': 'Confirmation Dialog',
      'message': 'Do you confirm?'
    };
    this.dialogs.openConfirm(opts).then(confirmed => console.log(confirmed));
  }

  showSimpleInputDialog() {
    const opts = {
      'title': 'Simple Input Dialog',
      'message': 'What is your name?',
      'value': this.input ? this.input : ''
    };
    this.dialogs.openSimpleInput(opts).then((input: string | null) => this.input = input);
  }

  showQRCodeDialog() {
    const opts = {
      'title': 'Simple Input Dialog',
      'qrdata': 'https://www.youtube.com/watch?v=cNycdfFEgBc',
      'copySuccessMessage': 'Cats vs Cucumbers!'
    };
    this.dialogs.openQRCode(opts);
  }
}
