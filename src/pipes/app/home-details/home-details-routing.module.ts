import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDetailsPage } from './home-details.page';

const routes: Routes = [
  {
    path: '',
    component: HomeDetailsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeDetailsPageRoutingModule {}
