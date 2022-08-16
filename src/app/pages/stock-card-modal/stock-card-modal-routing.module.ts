import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockCardModalPage } from './stock-card-modal.page';

const routes: Routes = [
  {
    path: '',
    component: StockCardModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockCardModalPageRoutingModule {}
