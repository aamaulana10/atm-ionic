import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PendingservicePage } from './pendingservice';

@NgModule({
  declarations: [
    PendingservicePage,
  ],
  imports: [
    IonicPageModule.forChild(PendingservicePage),
  ],
})
export class PendingservicePageModule {}
