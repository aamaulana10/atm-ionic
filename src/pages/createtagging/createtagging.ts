import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CreatetaggingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-createtagging',
  templateUrl: 'createtagging.html',
})
export class CreatetaggingPage {
  public tanggal: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tanggal = new Date();
    console.log();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatetaggingPage');
    console.log(this.tanggal);
  }

}
