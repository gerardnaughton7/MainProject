import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login';

@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  constructor(public navCtrl: NavController) {

  }

  signUpPage() {
   this.navCtrl.push(LoginPage);
 }

 loginPage() {
   this.navCtrl.push(LoginPage);
 }

}
