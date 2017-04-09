import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginService} from '../../app/services/login.service';
import {BooksPage} from '../books/books';
import {App, AlertController } from 'ionic-angular';
import {MD5Service} from '../../app/services/md5.service';

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


  constructor(public navCtrl: NavController, private LoginService: LoginService, private alertCtrl: AlertController, private app:App) {
    
  }
   

  //get existing users
  ngOnInit(){
    this.LoginService.getUsers().subscribe(existingUsers => {
      this.existingUsers = existingUsers;
      console.log(existingUsers);
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
      console.log(data);
      if(user.Email === data.Email)
      {
        this.match = true;
        alert("Im sorry this email already Exists");
      }
    }   
    //create new user 
    if(this.match == false)
    this.LoginService.addUser(user).subscribe(data => {
      this.newUser = data;
      console.log(user);
      this.navCtrl.push(BooksPage);
    });
  }
}
