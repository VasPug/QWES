import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockCardModalPageRoutingModule } from './stock-card-modal-routing.module';

import { StockCardModalPage } from './stock-card-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StockCardModalPageRoutingModule
  ],
  declarations: [StockCardModalPage]
})
export class StockCardModalPageModule {}
