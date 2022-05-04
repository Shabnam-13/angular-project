import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  Directive,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css', '../app.component.css'],
})
@Directive({
  selector: '[appHighlight]',
})
export class BookListComponent implements OnInit {
  @Input() name: string;
  public names: string[] = [];
  public bookName: string;
  @Output() bookAdded: EventEmitter<string> = new EventEmitter<string>();
  @Output() bookDeleted: EventEmitter<string> = new EventEmitter<string>();

  constructor(el: ElementRef) {
    this.names.push(
      'Dune',
      'To Kill A Mockingbird',
      'The Great Gatsby',
      'Don Quixote',
      'Of Mice And Men'
    );

    el.nativeElement.style.backgroundColor = 'yellow';
  }

  addBook(): void {
    if (this.bookName === '') {
      return;
    }
    this.names.push(this.bookName);
    this.bookAdded.emit(this.bookName);
    this.bookName = '';
  }

  deleteBook(index: number): void {
    let deletedNames = this.names.splice(index, 1);
    this.bookDeleted.emit(deletedNames[0]);
    // console.log(deletedNames);
  }

  ngOnInit() {}
}
