import { Component, HostBinding, Input, OnInit, OnDestroy } from '@angular/core';
import { CdkAccordionItem } from '@angular/cdk/accordion';
import { matExpansionAnimations, MatExpansionPanelState } from '@angular/material';

@Component({
  selector: 'integrity-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
  animations: [matExpansionAnimations.bodyExpansion]
})
export class SectionComponent extends CdkAccordionItem implements OnInit, OnDestroy {

  @Input() public enableExpansion = false;
  @Input() public title = '';
  @Input() public expansionId = '';

  subscription: any;

  ngOnInit() {
    this.open();
    if (this.enableExpansion && this.expansionId && localStorage.getItem(this.expansionId) === 'false') {
      this.close();
    }
    this.subscription = this.expandedChange.subscribe((expanded: boolean) => {
      if (this.enableExpansion && this.expansionId) {
        localStorage.setItem(this.expansionId, String(expanded));
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
