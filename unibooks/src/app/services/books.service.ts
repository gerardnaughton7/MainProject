import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class BookService{
    //variables
    http:any;
    apiKey:String;
    bookurl:String;

    //create constructor to connect to mlab database
    constructor(http:Http){
        this.http = http;
        this.apiKey = 'GSEkjG1w-1Rv5lVRpftyp39Sa_hheO3S';
        this.bookurl = 'https://api.mlab.com/api/1/databases/unibooks/collections/books';
    }
    //return books from mlab
    getbooks(){
        return this.http.get(this.bookurl+'?apiKey='+this.apiKey)
            .map(res => res.json());
    }

}