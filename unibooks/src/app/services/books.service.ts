import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class BookService{
    http:any;
    apiKey:String;
    bookurl:String;

    constructor(http:Http){
        this.http = http;
        this.apiKey = 'GSEkjG1w-1Rv5lVRpftyp39Sa_hheO3S';
        this.bookurl = 'https://api.mlab.com/api/1/databases/unibooks/collections/books';
    }
    //return books
    getbooks(){
        return this.http.get(this.bookurl+'?apiKey='+this.apiKey)
            .map(res => res.json());
    }

    //add new book
    addBook(book){
        var headers = new Headers();
        headers.append('Content-Type' , 'application/json');
        return this.http.post(this.bookurl+'?apiKey='+this.apiKey, JSON.stringify(book),{headers: headers})
        .map(res => res.json());
    }
    //deletes ad from datatbase
    deleteAd(bookId){
        return this.http.delete(this.bookurl+'/'+bookId+'?apiKey='+this.apiKey)
        .map(res => res.json());
    }
    
    //update ad
    updateAd(book){
        return this.http.delete(this.bookurl+'/'+book+'?apiKey='+this.apiKey)
        .map(res => res.json());
    }
    

}