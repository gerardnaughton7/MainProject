import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BookService} from '../../app/services/books.service';
import {MyAdsDetailsPage} from '../myAds-details/myAds-details';
import {MenuPage} from '../menu/menu';
import {App, AlertController } from 'ionic-angular';
import {global} from '../../app/services/global.login';

@Component({
  selector: 'my-ads',
  templateUrl: 'my-ads.html'
})
export class MyAdsPage {

  public Email: String;
  public allBooks: any;
  public mBooks = [];
  public book: any;

  constructor(public navCtrl: NavController, private BookService: BookService, private alertCtrl: AlertController, private global: global) {
    
  }

  //get existing users
  ngOnInit(){
    this.BookService.getbooks().subscribe(allBooks => {
    this.allBooks = allBooks;

      //get only ads that user created
      for(let data of this.allBooks)
      {
        if(this.global.getLoginUser() === data.Email)
        {
            this.book = {
            Title: data.Title,
            Author: data.Author,
            Seller: data.Seller,
            Description: data.Description,
            Phone: data.Phone,
            Email: data.Email,
            Price: data.Price,
            Id: data._id.$oid
            }
            this.mBooks.push(this.book);
        }
        console.log(this.book.Email);
      } 
    });
  }

  //if book is selected go to book details page
  bookSelected(event, book){
    this.navCtrl.push(MyAdsDetailsPage, {
      book: this.book
    });
  }

  //brings you to the menu page
  menu(){
    this.navCtrl.push(MenuPage);
  }
}
