import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MasterclientPage } from './masterclient';

@NgModule({
  declarations: [
    MasterclientPage,
  ],
  imports: [
    IonicPageModule.forChild(MasterclientPage),
  ],
})
export class MasterclientPageModule {}
