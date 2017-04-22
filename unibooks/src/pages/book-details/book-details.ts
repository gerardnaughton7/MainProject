import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BookService} from '../../app/services/books.service';
@Component({
  selector: 'book-details',
  templateUrl: 'book-details.html'
})
export class BookDetailsPage {
    public book:any;
    public result:any;
    public deleteButton = true;

    constructor(public navCtrl: NavController, public params: NavParams, bookService: BookService) {
        this.book = params.get('book');
  }
}