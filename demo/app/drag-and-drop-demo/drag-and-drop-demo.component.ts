import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'integrity-angular-drag-and-drop-demo',
  templateUrl: './drag-and-drop-demo.component.html'
})
export class DragAndDropDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showDroppedFiles(files: any) {
    console.log(files);
  }

  showIgnoredFiles(files: any) {
    console.log(files);
  }

}
