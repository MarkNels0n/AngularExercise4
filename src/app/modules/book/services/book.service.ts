import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Book[] = [
    {
      id:12345,
      name:"Book of Adventures",
      authors:["Adam Vent"],
      isbn:"123456789X"
    },
    {
      id:23456,
      name:"Book of Battles",
      authors:["Beattles"],
      isbn:"234567891X"
    },
    {
      id:34567,
      name:"Book of Computers",
      authors:["Cam Pyuter"],
      isbn:"345678912X"
    },
    {
      id:45678,
      name:"Book of Dangers",
      authors:["Daniel Gers"],
      isbn:"456789123X"
    },
    {
      id:56789,
      name:"Book of Excellence",
      authors:["Ezelle Lins"],
      isbn:"567891234X"
    }
  ]

  getBooks() {
    return this.books
  }

  constructor() { }
}
