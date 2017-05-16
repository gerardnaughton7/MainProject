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

    constructor(public navCtrl: NavController, public params: NavParams, private bookService: BookService, private alertCtrl: AlertController) {
        this.book = params.get('book');
        console.log(+this.book)
  }

  updateAd(bookId){
    this.bookService.updateAd(bookId).subscribe(data => {
        this.result = data;
    });
    let alert = this.alertCtrl.create({
        title: 'Request Successful!',
        subTitle: 'Your ad will be updated shortly',
        buttons: ['OK']
        });
        alert.present();
        this.navCtrl.pop();
  }
}