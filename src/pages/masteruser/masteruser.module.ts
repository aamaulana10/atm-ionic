import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MasteruserPage } from './masteruser';

@NgModule({
  declarations: [
    MasteruserPage,
  ],
  imports: [
    IonicPageModule.forChild(MasteruserPage),
  ],
})
export class MasteruserPageModule {}
