import {Injectable} from '@angular/core';

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