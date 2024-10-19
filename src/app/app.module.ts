import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PlatformInfoService } from 'src/services/environment-services-lib/platform-info/platform-info.service';
import { EnvironmentServicesProviders } from 'src/services/tg/environment-services-providers';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

    EnvironmentServicesProviders,


  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
