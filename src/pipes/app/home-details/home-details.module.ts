import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeDetailsPageRoutingModule } from './home-details-routing.module';
import { HomeDetailsPage } from './home-details.page';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomeDetailsPageRoutingModule,
    SharedModule
  ],
  declarations: [HomeDetailsPage]
})
export class HomeDetailsPageModule {}
