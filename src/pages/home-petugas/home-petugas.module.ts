import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePetugasPage } from './home-petugas';

@NgModule({
  declarations: [
    HomePetugasPage,
  ],
  imports: [
    IonicPageModule.forChild(HomePetugasPage),
  ],
})
export class HomePetugasPageModule {}
