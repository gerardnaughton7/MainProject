import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginService} from '../../app/services/login.service';
import {BooksPage} from '../books/books';
import {App, AlertController } from 'ionic-angular';
import {MD5Service} from '../../app/services/md5.service';
import {global} from '../../app/services/global.login';

@Component({
  selector: 'sign-up',
  templateUrl: 'sign-up.html'
})
export class SignUpPage {

  public Name: String;
  public Address: String;
  public Phone: String;
  public Email: String;
  public Password: String;
  public newUser : any;
  public existingUsers: any;
  public match = false;


  constructor(public navCtrl: NavController,private global:global, private LoginService: LoginService, private alertCtrl: AlertController, private app:App) {
    
  }
   

  //get existing users
  ngOnInit(){
    this.LoginService.getUsers().subscribe(existingUsers => {
      this.existingUsers = existingUsers;
    });
  }
  
//sign in function
  signIn(){
      var user = {
      Name: this.Name,
      Address: this.Address,
      Phone: this.Phone,
      Email: this.Email,
      Password: MD5Service(this.Password)
    }
    
    //check if user email exists. output alert if email exists
    for(let data of this.existingUsers)
    {
      if(user.Email === data.Email)
      {
        this.match = true;
        let alert = this.alertCtrl.create({
        title: 'Email Exists',
        subTitle: 'Email Already exists. Log in or try again!',
        buttons: ['OK']
        });
        alert.present();
      }
    }   
    //create new user if info is correct
    if(this.match == false)
    {
      this.global.setLoginUser(user.Email);
      this.LoginService.addUser(user).subscribe(data => {
      this.newUser = data;
      this.navCtrl.setRoot(BooksPage);
    });
    }
  }
}
