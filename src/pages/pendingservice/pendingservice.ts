import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PendingservicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pendingservice',
  templateUrl: 'pendingservice.html',
})
export class PendingservicePage {
  public responPending: any;
  dataobject: any;
  rowdata: any;

  pending =
  {"action":"get_services",
  "basekey":"aXRvdCBhbmRpIGFuY2hhIGFzaW4gdG9tbyBtdWRhaDJhbiBraXRhIHRlcnVzIGJlcnNhbWEgbWVtYmFuZ3VuIG1lbnVqdSByYWhtYXQgYWxsYWg="
  ,"userlogin":"","data":{"username":""}
};

  constructor(public navCtrl: NavController, public navParams: NavParams,
            public restProvider : RestProvider) {
    localStorage.getItem('userData');
    console.log(localStorage.getItem('userData'));

    this.getDataServiceTransaction();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendingservicePage');
  }

  getDataServiceTransaction(){
    const dataUsername = JSON.parse(localStorage.getItem('userData'));
    this.pending.data['username'] = dataUsername.UserPegawaiID;
    this.restProvider.getPendingService(this.pending)
    .then(data => {
      this.responPending = data;
      this.dataobject = this.responPending["dataobject"];
      this.rowdata = this.dataobject[0];

      console.log(this.dataobject);
    });
  }

}
