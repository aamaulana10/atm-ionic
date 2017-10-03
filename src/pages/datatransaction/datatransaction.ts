import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DatatransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datatransaction',
  templateUrl: 'datatransaction.html',
})
export class DatatransactionPage {
  public responData: any;
  dataobject: any;
  rowdata: any;

  trans =
  {"action":"get_DataTrans",
  "basekey":"aXRvdCBhbmRpIGFuY2hhIGFzaW4gdG9tbyBtdWRhaDJhbiBraXRhIHRlcnVzIGJlcnNhbWEgbWVtYmFuZ3VuIG1lbnVqdSByYWhtYXQgYWxsYWg="
  ,"userlogin":"","data":{"username":""}
};

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public restProvider: RestProvider) {
    localStorage.getItem('userData');
    console.log(localStorage.getItem('userData'));

    this.getDataTransaction();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatatransactionPage');
  }

  getDataTransaction(){
    const dataUsername = JSON.parse(localStorage.getItem('userData'));
    this.trans.data['username'] = dataUsername.UserPegawaiID;
    this.restProvider.getDataTransaction(this.trans)
    .then(data => {
      this.responData = data;
      this.dataobject = this.responData["dataobject"];
      this.rowdata = this.dataobject[0];

      console.log(this.dataobject);
    });
  }

}
