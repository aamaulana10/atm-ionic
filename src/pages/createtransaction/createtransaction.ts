import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CreatetransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-createtransaction',
  templateUrl: 'createtransaction.html',
})
export class CreatetransactionPage {

  startcreate: boolean = false;
  tesTombol:any;

  tes;
  i;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tes = {
        'nama':"saya",
        'kelas':"1sd"
    }

    for(this.i=0; this.i = this.tes; this.i++){

    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatetransactionPage');
  }

  postData(){

  }
  create(){
    this.startcreate = !this.startcreate;
  }

  back(){
    this.startcreate = !this.startcreate;
  }
}
