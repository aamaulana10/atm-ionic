import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MasteratmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-masteratm',
  templateUrl: 'masteratm.html',
})
export class MasteratmPage {
  public responATM: any;
  dataobject: any;
  rowdata: any;

  atms =
  {"action":"get_masteratms",
  "basekey":"aXRvdCBhbmRpIGFuY2hhIGFzaW4gdG9tbyBtdWRhaDJhbiBraXRhIHRlcnVzIGJlcnNhbWEgbWVtYmFuZ3VuIG1lbnVqdSByYWhtYXQgYWxsYWg=",
  "userlogin":""
   };

  constructor(public navCtrl: NavController, public navParams: NavParams,
            public restProvider: RestProvider) {
    localStorage.getItem('userData');
    console.log(localStorage.getItem('userData'));

    this.getMasterATM();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MasteratmPage');
  }

  getMasterATM(){
    this.restProvider.getMasterATM(this.atms)
    .then(data => {
      this.responATM = data;
      this.dataobject = this.responATM["dataobject"];
      this.rowdata = this.dataobject[0];

      console.log(this.dataobject);
    });
  }


}
