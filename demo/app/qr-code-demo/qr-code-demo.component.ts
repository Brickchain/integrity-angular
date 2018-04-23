import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'integrity-angular-qr-code-demo',
  templateUrl: './qr-code-demo.component.html'
})
export class QRCodeDemoComponent implements OnInit {

  data: string;
  level: string;

  constructor() {
    this.data = 'https://brickchain.com';
    this.level = 'L';
  }

  ngOnInit() {
  }

}
