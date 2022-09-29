import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  providers: [BookService]
})
export class BookListComponent implements OnInit {

  booksReceived: Book[] = []

  getBooksFromService() {
    this.booksReceived = this.bkservice.getBooks()
  }

  constructor(private bkservice: BookService) { }

  ngOnInit(): void {
  }

  bookAction(booksReceived:Book) {
    console.log(booksReceived);
  }


}
