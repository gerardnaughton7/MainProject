import { Component } from '@angular/core';
import { NavController, App, AlertController } from 'ionic-angular';
import {BookService} from '../../app/services/books.service';
import {BooksPage} from '../books/books';
import {MenuPage} from '../menu/menu';
import {global} from '../../app/services/global.login';

@Component({
  selector: 'create-ad',
  templateUrl: 'create-ad.html'
})
export class CreateAdPage {

  public Title: String;
  public Author: String;
  public Seller: String;
  public Description: String;
  public Phone: String;
  public Email: String;
  public Price: String;
  public newAd: any;

  constructor(public navCtrl: NavController, private bookService: BookService, private global:global, private alertCtrl: AlertController) {
    
  }
    
    ionViewWillEnter(){
      if(this.global.getLoginUser() === "")
      {
        let alert = this.alertCtrl.create({
        title: 'Sorry',
        subTitle: 'Use must Log In or Sign In to Create Ad',
        buttons: ['OK']
        });
        alert.present();
        this.navCtrl.push(MenuPage); 
      }   
    }
   
    onSubmit(){
    var book = {
      Title: this.Title,
      Author: this.Author,
      Seller: this.Seller,
      Description: this.Description,
      Phone: this.Phone,
      Email: this.global.getLoginUser(),
      Price: this.Price
    }

    //add new ad
    this.bookService.addBook(book).subscribe(data => {
      this.newAd = data;
     });
     
     this.navCtrl.setRoot(BooksPage);
  }
  
   //brings you to menu page
   menu(){
    this.navCtrl.push(MenuPage);
  }
}