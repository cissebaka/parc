import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { IngenieurComponent } from './ingenieur/ingenieur.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage, 
    children: [
      { path: 'ingenieur', component: IngenieurComponent }
    ]
  },
  
  {
    path: 'serveur',
    loadChildren: () => import('../serveur/serveur.module').then( m => m.ServeurPageModule)
  },
  {
    path: 'service',
    loadChildren: () => import('../service/service.module').then( m => m.ServicePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
