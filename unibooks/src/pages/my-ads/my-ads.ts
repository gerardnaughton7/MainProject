import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BookService} from '../../app/services/books.service';
import {BooksPage} from '../books/books';
import {BookDetailsPage} from '../book-details/book-details';
import {MD5Service} from '../../app/services/md5.service';
import {App, AlertController } from 'ionic-angular';
import {global} from '../../app/services/global.login';

@Component({
  selector: 'my-ads',
  templateUrl: 'my-ads.html'
})
export class MyAdsPage {

  public Email: String;
  public allBooks: any;
  public myBooks: [any];
  public count: any = 0;

  constructor(public navCtrl: NavController, private BookService: BookService, private alertCtrl: AlertController, private global: global) {
    
  }
  //get existing users
  ngOnInit(){
    this.BookService.getbooks().subscribe(allBooks => {
    this.allBooks = allBooks;
    console.log(allBooks);
    var mBooks = [];
    for(let data of this.allBooks)
    {
      console.log(data.Email);
      console.log(this.global.getLoginUser);
      if(this.global.getLoginUser() === data.Email)
      {
        mBooks.push(data);
        console.log("at first if" + mBooks);
        this.count++;
      }
    }    
    console.log("at first if" + this.myBooks); 
    });
  }

  bookSelected(event, book){
    this.navCtrl.push(BookDetailsPage, {
      book: book
    });
  }
}
