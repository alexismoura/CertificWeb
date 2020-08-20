import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

const KEY = 'SEGMENTOMODALIDADE';

@Injectable({
  providedIn: 'root'
})
export class SegmentoModalidade {

  constructor() { }

  isLogged() {
    return !!this.getUserStorage();
  }

  setUserStorage(user) {
      window.sessionStorage.setItem(KEY, JSON.stringify(user));
  }

  getUserStorage() {
      return JSON.parse(window.sessionStorage.getItem(KEY));
  }

  logout() {
      window.sessionStorage.removeItem(KEY);
  }

}
