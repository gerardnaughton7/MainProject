import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { CreateAdPage } from '../pages/create-ad/create-ad';
import {BooksPage} from '../pages/books/books';
import {BookDetailsPage} from '../pages/book-details/book-details';
import {LoginPage} from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import {MenuPage} from '../pages/menu/menu';
import {SignUpPage} from '../pages/sign-up/sign-up';
import {MyAdsPage} from '../pages/my-ads/my-ads';
import {MyAdsDetailsPage} from '../pages/myAds-details/myAds-details';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    CreateAdPage,
    BooksPage,
    BookDetailsPage,
    LoginPage,
    MenuPage,
    SignUpPage,
    MyAdsPage,
    MyAdsDetailsPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    CreateAdPage,
    BooksPage,
    BookDetailsPage,
    LoginPage,
    MenuPage,
    SignUpPage,
    MyAdsPage,
    MyAdsDetailsPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
