import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PendingjoborderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pendingjoborder',
  templateUrl: 'pendingjoborder.html',
})
export class PendingjoborderPage {
  public responPending: any;
  dataobject: any;
  rowdata: any;

  pending =
  {"action":"get_pendings",
  "basekey":"aXRvdCBhbmRpIGFuY2hhIGFzaW4gdG9tbyBtdWRhaDJhbiBraXRhIHRlcnVzIGJlcnNhbWEgbWVtYmFuZ3VuIG1lbnVqdSByYWhtYXQgYWxsYWg="
  ,"userlogin":"","data":{"username":""}
};

  constructor(public navCtrl: NavController, public navParams: NavParams,
            public restProvider : RestProvider) {
    localStorage.getItem('userData');
    console.log(localStorage.getItem('userData'));

    this.getDataPendingJobOrder();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendingjoborderPage');
  }

  getDataPendingJobOrder(){
    const dataUsername = JSON.parse(localStorage.getItem('userData'));
    this.pending.data['username'] = dataUsername.UserPegawaiID;
    this.restProvider.getPendingJobOrder(this.pending)
    .then(data => {
      this.responPending = data;
      this.dataobject = this.responPending["dataobject"];
      this.rowdata = this.dataobject[0];

      console.log(this.dataobject);
    });
  }

}