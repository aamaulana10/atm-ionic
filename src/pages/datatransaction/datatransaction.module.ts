import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatatransactionPage } from './datatransaction';

@NgModule({
  declarations: [
    DatatransactionPage,
  ],
  imports: [
    IonicPageModule.forChild(DatatransactionPage),
  ],
})
export class DatatransactionPageModule {}
