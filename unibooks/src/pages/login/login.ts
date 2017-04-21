import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginService} from '../../app/services/login.service';
import {BooksPage} from '../books/books';
import {MD5Service} from '../../app/services/md5.service';
import {App, AlertController } from 'ionic-angular';
import {global} from '../../app/services/global.login';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public Email: String;
  public Password: String;
  public existingUsers: any;
  public match = false;
  

  constructor(public navCtrl: NavController, private LoginService: LoginService, private alertCtrl: AlertController, private global: global) {
    
  }
  //get existing users
  ngOnInit(){
    this.LoginService.getUsers().subscribe(existingUsers => {
      this.existingUsers = existingUsers;
    });
  }
  //checks if user info is correct if not will output alert saying wrong email or password
  logIn(){
    var user = {
      Email: this.Email,
      Password: MD5Service(this.Password)
    }

    for(let data of this.existingUsers)
    {
      if(user.Email === data.Email && user.Password === data.Password)
      {
        this.global.setLoginUser(user.Email);
        this.match = true;
        this.navCtrl.setRoot(BooksPage);
      }
    }   

    //invalid email password 
    if(this.match === false)
    {
      let alert = this.alertCtrl.create({
        title: 'Incorrect',
        subTitle: 'Incorrect Email or Password entered! Please try again.',
        buttons: ['OK']
        });
      alert.present();
    }
  }
}
