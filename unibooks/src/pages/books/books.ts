import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BookService} from '../../app/services/books.service';

@Component({
  selector: 'books',
  templateUrl: 'books.html'
})
export class BooksPage {

  //book object
  books:any;

  constructor(public navCtrl: NavController, private bookService: BookService) {

  }

  //will run when initialised and bring in all books from the service
  ngOnInit(){
    this.bookService.getbooks().subscribe(books => {
      this.books = books;
    });
  }


}
