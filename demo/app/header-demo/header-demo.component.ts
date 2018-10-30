import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'integrity-angular-header-demo',
  templateUrl: './header-demo.component.html',
  styles: [`
    .demo-title {
      color: #004B97;
      margin-bottom: 10px;
      font-size: 16px;
      padding: 0 30px;
    }

    .padding {
      padding-bottom: 50px;
    }
  `]
})
export class HeaderDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
