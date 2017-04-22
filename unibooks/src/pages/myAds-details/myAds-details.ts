import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BookService} from '../../app/services/books.service';
@Component({
  selector: 'myAds-details',
  templateUrl: 'myAds-details.html'
})
export class MyAdsDetailsPage {
    public book:any;
    public result:any;

    constructor(public navCtrl: NavController, public params: NavParams, private bookService: BookService) {
        this.book = params.get('book');
  }

  deleteAd(bookId){
    console.log("button pressed"+ bookId);
    this.bookService.deleteAd(bookId);
  }
}