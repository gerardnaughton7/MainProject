import {Injectable} from '@angular/core';
//create global variable so that we know if user is logged in
@Injectable()
export class global  {
    loginUser : string;

    constructor() {
        this.loginUser = "";
    }

    setLoginUser(value) {
    this.loginUser = value;
    }

    getLoginUser() {
    return this.loginUser;
    }

};