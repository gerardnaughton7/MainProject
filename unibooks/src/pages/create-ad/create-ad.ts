import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BookService} from '../../app/services/books.service';
import {BooksPage} from '../books/books';

@Component({
  selector: 'create-ad',
  templateUrl: 'create-ad.html'
})
export class CreateAdPage {

  public title: String;
  public author: String;
  public seller: String;
  public description: String;
  public contactInfo: String;
  public newAd: any;

  constructor(public navCtrl: NavController, private bookService: BookService) {
    
  }

  
  onSubmit(){
    var book = {
      title: this.title,
      author: this.author,
      seller: this.seller,
      description: this.description,
      contactInfo: this.contactInfo
    }

    //add new ad
    this.bookService.addBook(book).subscribe(data => {
      this.newAd = data;
     });
     
     this.navCtrl.push(BooksPage);
  }
}