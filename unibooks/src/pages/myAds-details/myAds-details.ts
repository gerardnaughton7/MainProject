import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {BooksPage} from '../books/books';
import {BookService} from '../../app/services/books.service';
@Component({
  selector: 'myAds-details',
  templateUrl: 'myAds-details.html'
})
export class MyAdsDetailsPage {
    public book:any;
    public result:any;

    constructor(public navCtrl: NavController, public params: NavParams, private bookService: BookService, private alertCtrl: AlertController) {
        this.book = params.get('book');
  }

  deleteAd(adId){
    this.bookService.deleteAd(adId).subscribe(data => {
        this.result = data;
    });
    let alert = this.alertCtrl.create({
        title: 'Request Successful!',
        subTitle: 'Your ad will be deleted shortly',
        buttons: ['OK']
        });
        alert.present();
        this.navCtrl.setRoot(BooksPage);
  }
}