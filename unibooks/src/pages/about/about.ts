import { Component } from '@angular/core';
import {MenuPage} from '../menu/menu';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  menu(){
    this.navCtrl.push(MenuPage);
  }

}
