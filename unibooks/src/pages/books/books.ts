import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BookService} from '../../app/services/books.service';
import {BookDetailsPage} from '../book-details/book-details';
import {MenuPage} from '../menu/menu';

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
  ionViewWillEnter(){
    this.bookService.getbooks().subscribe(books => {
      this.books = books;
      console.log(books);
    });
  }

  //will bring you to the book details page when book is clicked
  bookSelected(event, book){
    this.navCtrl.push(BookDetailsPage, {
      book: book
    });
  }

  menu(){
    this.navCtrl.push(MenuPage);
  }
}
