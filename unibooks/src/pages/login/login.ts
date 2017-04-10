import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginService} from '../../app/services/login.service';
import {BooksPage} from '../books/books';
import {MD5Service} from '../../app/services/md5.service';
import {App, AlertController } from 'ionic-angular';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public Email: String;
  public Password: String;
  public existingUsers: any;
  public match = false;
  

  constructor(public navCtrl: NavController, private LoginService: LoginService, private alertCtrl: AlertController) {
    
  }
  //get existing users
  ngOnInit(){
    this.LoginService.getUsers().subscribe(existingUsers => {
      this.existingUsers = existingUsers;
      console.log(existingUsers);
    });
  }

  logIn(){
    var user = {
      Email: this.Email,
      Password: MD5Service(this.Password)
    }

    for(let data of this.existingUsers)
    {
      console.log(user.Email);
      if(user.Email === data.Email && user.Password === data.Password)
      {
        this.match = true;
        console.log("successful login"+ user.Password);
        this.navCtrl.parent(BooksPage);
      }
    }   
    console.log(this.match);
    //create new user 
    if(this.match === false)
    {
      console.log("incorrect"+ user.Password + user.Email);
      let alert = this.alertCtrl.create({
        title: 'Incorrect',
        subTitle: 'Incorrect Email or Password entered! Please try again.',
        buttons: ['OK']
        });
      alert.present();
    }
  }
}
