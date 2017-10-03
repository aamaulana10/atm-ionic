import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MasterclientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-masterclient',
  templateUrl: 'masterclient.html',
})
export class MasterclientPage {
  public responClient: any;
  dataobject: any;
  rowdata: any;

  client =
  {"action":"get_masterclients",
  "basekey":"aXRvdCBhbmRpIGFuY2hhIGFzaW4gdG9tbyBtdWRhaDJhbiBraXRhIHRlcnVzIGJlcnNhbWEgbWVtYmFuZ3VuIG1lbnVqdSByYWhtYXQgYWxsYWg=",
  "userlogin":""
   };

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public restProvider: RestProvider) {
    localStorage.getItem('userData');
    console.log(localStorage.getItem('userData'));

    this.getMasterClient();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MasterclientPage');
  }

  getMasterClient(){
    this.restProvider.getMasterclient(this.client)
    .then(data => {
      this.responClient = data;
      this.dataobject = this.responClient["dataobject"];
      this.rowdata = this.dataobject[0];

      console.log(this.dataobject);
    });
  }

}
