import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginService} from '../../app/services/login.service';
import {BooksPage} from '../books/books';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public Email: String;
  public Password: String;
  

  constructor(public navCtrl: NavController, private loginService: LoginService) {
    
  }

  
  onSubmit(){
    var user = {
      Title: this.Email,
      Author: this.Password,
    }

    //add new ad
    /*this.bookService.addBook(book).subscribe(data => {
      this.newAd = data;
      console.log(book);
     });*/
     
     this.navCtrl.push(BooksPage);
  }
}