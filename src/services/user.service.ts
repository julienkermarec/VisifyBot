import {Injectable, signal} from '@angular/core';
import { WebView } from '@m1cron-labs/ng-telegram-mini-app';
import { Utils } from '@tma.js/sdk';
import { WebApp } from '@m1cron-labs/ng-telegram-mini-app';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private telegram: any;
  userConnected:any = null;

  constructor() {
    console.log('TelegramService constructor');
    this.telegram = window.Telegram?.WebApp;
    console.log('Initial Telegram WebApp object:', this.telegram);
    
    if (this.telegram && this.telegram.ready) {
      const originalReady = this.telegram.ready;
      this.telegram.ready = (callback: Function) => {
        console.log('Intercepted ready() call');
        return originalReady.call(this.telegram, (...args: any[]) => {
          console.log('Ready callback is about to be executed');
          callback(...args);
          console.log('Ready callback has been executed');
        });
      };
    }
  }

  init(timeout: number = 5000, initDelay: number = 1000): Promise<void> {
    console.log('TelegramService init called');
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (!this.telegram) {
          console.error('Telegram WebApp is not available');
          reject(new Error('Telegram WebApp is not available'));
          return;
        }

        console.log('Setting up Telegram WebApp ready callback');
        const timeoutId = setTimeout(() => {
          console.error('Telegram WebApp initialization timed out');
          reject(new Error('Telegram WebApp initialization timed out'));
        }, timeout);

        this.telegram.ready(() => {
          console.log('Telegram WebApp ready callback fired');
          clearTimeout(timeoutId);
          resolve();
        });
      }, initDelay);
    });
  }

  getInitData() {
    const data = this.telegram?.initData || '';
    console.log('getInitData called, returning:', data);
    return data;
  }

  getInitDataUnsafe() {
    const data = this.telegram?.initDataUnsafe || {};
    console.log('getInitDataUnsafe called, returning:', data);
    return data;
  }

  set user(user:any){
    this.user = user;
  }

  get user(){
    return this.userConnected;
  }
}
