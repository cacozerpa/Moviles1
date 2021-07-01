import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchlistPageRoutingModule } from './searchlist-routing.module';

import { SearchlistPage } from './searchlist.page';

import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchlistPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SearchlistPage]
})
export class SearchlistPageModule {}
