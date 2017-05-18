import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {UpdateAdPage} from '../updateAd/updateAd';
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

    deleteAd(bookId){
    this.bookService.deleteAd(bookId).subscribe(data => {
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

    updateAd(){
    this.navCtrl.push(UpdateAdPage, {
      book: this.book
    });

  }
}