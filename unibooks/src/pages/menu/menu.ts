import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {SignUpPage} from '../sign-up/sign-up';

@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  constructor(public navCtrl: NavController) {

  }

  signUpPage() {
   this.navCtrl.push(SignUpPage);
 }

 loginPage() {
   this.navCtrl.push(LoginPage);
 }

 logout() {

 }

}
 