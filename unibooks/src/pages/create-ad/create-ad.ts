import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BookService} from '../../app/services/books.service';
import {BooksPage} from '../books/books';

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
  public newAd: any;

  constructor(public navCtrl: NavController, private bookService: BookService) {
    
  }

  
  onSubmit(){
    var book = {
      Title: this.Title,
      Author: this.Author,
      Seller: this.Seller,
      Description: this.Description,
      Phone: this.Phone
    }

    //add new ad
    this.bookService.addBook(book).subscribe(data => {
      this.newAd = data;
      console.log(book);
     });
     
     this.navCtrl.push(BooksPage);
  }
}