import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'integrity-angular-drag-and-drop-demo',
  templateUrl: './drag-and-drop-demo.component.html',
  styleUrls: ['./drag-and-drop-demo.component.scss']
})
export class DragAndDropDemoComponent implements OnInit {

  public droppedFiles: Array<File> = [];
  public ignoredFiles: Array<File> = [];

  constructor() { }

  ngOnInit() {
  }

  showDroppedFiles(files: Array<File>) {
    this.droppedFiles = files;
    console.log(files);
  }

  showIgnoredFiles(files: Array<File>) {
    this.ignoredFiles = files;
    console.log(files);
  }

}
