import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateservicePage } from './createservice';

@NgModule({
  declarations: [
    CreateservicePage,
  ],
  imports: [
    IonicPageModule.forChild(CreateservicePage),
  ],
})
export class CreateservicePageModule {}
