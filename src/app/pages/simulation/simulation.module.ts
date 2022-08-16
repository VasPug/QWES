import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimulationPageRoutingModule } from './simulation-routing.module';

import { SimulationPage } from './simulation.page';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimulationPageRoutingModule,
    ChartsModule
  ],
  declarations: [SimulationPage]
})
export class SimulationPageModule {}
