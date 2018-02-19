import { Component, Input, ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as qr from 'qr-image';

@Component({
  selector: 'integrity-qrcode',
  template: ''
})
export class QRCodeComponent implements OnChanges, OnInit {

  @Input() public qrdata = '';
  @Input() public level = 'M';

  constructor(public elementRef: ElementRef) { }

  public ngOnInit() {
    if (this.qrdata) {
      this.renderSVG();
    }
  }

  public ngOnChanges(changes: SimpleChanges) {
    if ('qrdata' in changes) {
      this.renderSVG();
    }
  }

  protected renderSVG() {
    const svgObj = qr.svgObject(this.qrdata, { ec_level: <qr.ec_level>this.level, type: 'svg', margin: 0 });
    // tslint:disable-next-line:max-line-length
    const html = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${svgObj.size} ${svgObj.size}"><path d="${svgObj.path}"></path></svg>`;
    const element: HTMLElement = this.elementRef.nativeElement;
    element.innerHTML = html;
  }

}
