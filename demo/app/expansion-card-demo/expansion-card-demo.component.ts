import { Component } from '@angular/core';

@Component({
  selector: 'integrity-angular-expansion-card-demo',
  templateUrl: './expansion-card-demo.component.html'
})
export class ExpansionCardDemoComponent {
  sections: Array<any> = [];
  isDefault = 'false';

  constructor() {
    this.sections = [
      {
        fields: [
          {
            name: 'Name(s)',
            values: ['Corinne Léa Stéphanie']
          },
          {
            name: 'Surname',
            values: ['Berthier']
          },
          {
            name: 'Document nr',
            values: ['940992310285']
          },
          {
            name: 'Date of birth',
            values: ['06/12/1965']
          },
          {
            name: 'Nationality',
            values: ['French']
          },
          {
            name: 'Expiry date',
            values: ['09/11/2021']
          }
        ]
      },
      {
        fields: [
          {
            name: 'Verified by',
            values: ['Ubble - 19/11/2018', 'Other realm - 19/11/2018']
          }
        ]
      },
      {
        fields: [
          {
            name: 'Shared with',
            values: ['Realm one', 'Realm two']
          }
        ]
      }
    ];
  }

  onBottomButtonClicked(event: any) {
    this.isDefault = this.isDefault === 'false' ? 'true' : 'false';
  }
}
