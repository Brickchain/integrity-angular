import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleInputDialogDemoComponent } from './simple-input-dialog-demo.component';

describe('SimpleInputDialogDemoComponent', () => {
  let component: SimpleInputDialogDemoComponent;
  let fixture: ComponentFixture<SimpleInputDialogDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleInputDialogDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleInputDialogDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
