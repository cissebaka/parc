import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServeurPageRoutingModule } from './serveur-routing.module';

import { ServeurPage } from './serveur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServeurPageRoutingModule
  ],
  declarations: [ServeurPage]
})
export class ServeurPageModule {}
