import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WalletAddressShortenerPipe } from './wallet-address-shortener.pipe';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent],
  exports: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot({ mode: 'ios' }), 
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
