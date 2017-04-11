import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {BookService} from './services/books.service';//imported our BookServices
import {LoginService} from './services/login.service';//imported our LoginServices
import { TabsPage } from '../pages/tabs/tabs';
import {MD5Service} from './services/md5.service';//imported MD5Service
import {global} from './services/global.login';//imported MD5Service

@Component({
  templateUrl: 'app.html',
  providers: [BookService, LoginService, global]//brought in as a provider
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
