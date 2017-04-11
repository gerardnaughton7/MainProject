import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { CreateAdPage } from '../create-ad/create-ad';
import { BooksPage } from '../books/books';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = BooksPage;
  tab2Root: any = CreateAdPage;
  tab3Root: any = AboutPage;

  constructor() {

  }

}
