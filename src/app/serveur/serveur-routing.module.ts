import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServeurPage } from './serveur.page';

const routes: Routes = [
  {
    path: '',
    component: ServeurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServeurPageRoutingModule {}
