import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export default class BookItemComponent implements OnInit {

  //parent to child
  @Input() book:Book | undefined

  //child to parent
  @Output() bookEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendBook() {
    this.bookEmitter.emit(this.book)
  }

  editBook() {}

  deleteBook() {}

}
