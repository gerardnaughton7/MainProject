import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {SignUpPage} from '../sign-up/sign-up';
import {global} from '../../app/services/global.login';
import {BooksPage} from '../books/books';
import{MyAdsPage} from '../my-ads/my-ads';

@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  public showLogOut = false;
  constructor(public navCtrl: NavController, private viewCtrl: ViewController, private global:global) {

  }
  // check if user is logged in
  ionViewWillEnter() {
      if(this.global.getLoginUser() !== "")
      {
        this.showLogOut = true;
      }
  }
 //navigate to sign up page
  signUpPage() {
   this.navCtrl.push(SignUpPage);
 }
 //navigate to login page
 loginPage() {
   this.navCtrl.push(LoginPage);
 }
 //navigates to my ads page if logged in
 myAdsPage() {
   this.navCtrl.setRoot(MyAdsPage);
 }
 //log out and reset vaiables
 logOut() {
   this.global.setLoginUser("");
   this.showLogOut = false;
   this.navCtrl.setRoot(BooksPage);
 }

}
 