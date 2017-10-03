import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DataservicePage } from './dataservice';

@NgModule({
  declarations: [
    DataservicePage,
  ],
  imports: [
    IonicPageModule.forChild(DataservicePage),
  ],
})
export class DataservicePageModule {}
