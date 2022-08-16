import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YogaPageRoutingModule } from './yoga-routing.module';

import { YogaPage } from './yoga.page';

import { FileSizeFormatPipe } from './file-size-format.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YogaPageRoutingModule
  ],
  declarations: [YogaPage, FileSizeFormatPipe]
})
export class YogaPageModule {}
