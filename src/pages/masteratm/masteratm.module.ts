import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MasteratmPage } from './masteratm';

@NgModule({
  declarations: [
    MasteratmPage,
  ],
  imports: [
    IonicPageModule.forChild(MasteratmPage),
  ],
})
export class MasteratmPageModule {}
