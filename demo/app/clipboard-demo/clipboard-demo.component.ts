import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'integrity-angular-clipboard-demo',
  templateUrl: './clipboard-demo.component.html'
})
export class ClipboardDemoComponent implements OnInit {

  public copiedValue = '';

  constructor() { }

  ngOnInit() {
  }

  showCopySuccess(event: any) {
    this.copiedValue = event;
  }

  showCopyError(event: any) {
    alert(event);
  }

}
