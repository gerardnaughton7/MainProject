import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {MyAdsPage} from '../my-ads/my-ads';
import {BookService} from '../../app/services/books.service';
@Component({
  selector: 'updateAd',
  templateUrl: 'updateAd.html'
})
export class UpdateAdPage {
    public book:any;
    public result:any;
    public updateBook:any;
    public Title: String;
    public Author: String;
    public Seller: String;
    public Description: String;
    public Phone: String;
    public Email: String;
    public Price: String;
    public Id: String;

  constructor(public navCtrl: NavController, public params: NavParams, private bookService: BookService, private alertCtrl: AlertController) {
    this.book = params.get('book');
    console.log(this.book)
  }

  updateAd(bookId){

    this.updateBook = {
      Title: this.Title,
      Author: this.Author,
      Seller: this.Seller,
      Description: this.Description,
      Phone: this.Phone,
      Email: this.book.Email,
      Price: this.Price
    }

    this.Id = this.book.Id;
    console.log(this.updateBook);

    this.bookService.updateAd(this.Id, this.updateBook).subscribe(data => {
        this.result = data;
    });
    let alert = this.alertCtrl.create({
        title: 'Request Successful!',
        subTitle: 'Your ad will be updated shortly',
        buttons: ['OK']
        });
        alert.present();
        this.navCtrl.pop();
        this.navCtrl.pop();
  }
}