import {
  OnInit,
  ElementRef,
  Directive,
  HostListener,
  HostBinding,
  EventEmitter,
  Output,
  Input
} from '@angular/core';

@Directive({
  selector: '[integrityDragAndDrop]'
})
export class DragAndDropDirective implements OnInit {

  @Input() private includeDataURL: Boolean = false;
  @Input() private extensions: Array<string> = [];
  @Output() private filesDropped: EventEmitter<File[]> = new EventEmitter();
  @Output() private filesIgnored: EventEmitter<File[]> = new EventEmitter();

  @HostBinding('class.dnd-hover') hover = false;

  input: any;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    const input = this.el.nativeElement.querySelector('input[type="file"]');
    if (input) {
      input.onchange = (event: any) => this.processFiles(event.target.files);
      this.input = input;
    }
    this.extensions = this.extensions.map(extension => extension.toLowerCase());
  }

  @HostListener('click', ['$event']) public onClick(event: any) {
    if (this.input) {
      event.stopPropagation();
      this.input.click();
    }
  }

  @HostListener('dragover', ['$event']) public onDragOver(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.hover = true;
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.hover = false;
  }

  @HostListener('drop', ['$event']) public onDrop(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.hover = false;
    this.processFiles(event.dataTransfer.files);
  }

  processFiles(files: FileList) {

    const droppedFiles: Array<File> = [];
    const ignoredFiles: Array<File> = [];

    Array.from(files).forEach((file: File) => {
      const extension = file.name.split('.')[file.name.split('.').length - 1].toLowerCase();
      (this.extensions.length && this.extensions.indexOf(extension) === -1) ? ignoredFiles.push(file) : droppedFiles.push(file);
    });

    if (this.includeDataURL) {
      Promise.all(droppedFiles.map((file: File) => {
        return new Promise<File>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            (<any>file)['dataURL'] = reader.result;
            resolve(file);
          };
          reader.readAsDataURL(file);
        });
      })).then((filesWithData: File[]) => this.filesDropped.emit(filesWithData));
    } else {
      this.filesDropped.emit(droppedFiles);
    }

    this.filesIgnored.emit(ignoredFiles);

  }

}
