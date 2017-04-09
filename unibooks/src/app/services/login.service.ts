import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class LoginService{
    http:any;
    apiKey:String;
    loginurl:String;

    constructor(http:Http){
        this.http = http;
        this.apiKey = 'GSEkjG1w-1Rv5lVRpftyp39Sa_hheO3S';
        this.loginurl = 'https://api.mlab.com/api/1/databases/unibooks/collections/customers';
    }
    //return users
    getUsers(){
        return this.http.get(this.loginurl+'?apiKey='+this.apiKey)
            .map(res => res.json());
    }

    //add new book
    addUser(newUser){
        var headers = new Headers();
        console.log(newUser);
        headers.append('Content-Type' , 'application/json');
        return this.http.post(this.loginurl+'?apiKey='+this.apiKey, JSON.stringify(newUser),{headers: headers})
        .map(res => res.json());
    }
}