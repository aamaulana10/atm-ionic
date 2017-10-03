import { RestProvider } from '../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VerificationtransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verificationtransaction',
  templateUrl: 'verificationtransaction.html',
})
export class VerificationtransactionPage {
  public responData: any;
  dataobject: any;
  rowdata: any;

  vertrans =
  {"action":"get_ListDataTrans",
  "basekey":"aXRvdCBhbmRpIGFuY2hhIGFzaW4gdG9tbyBtdWRhaDJhbiBraXRhIHRlcnVzIGJlcnNhbWEgbWVtYmFuZ3VuIG1lbnVqdSByYWhtYXQgYWxsYWg="
  ,"userlogin":"","data":{"username":""}
};

  constructor(public navCtrl: NavController, public navParams: NavParams,
            public restProvider : RestProvider) {
    localStorage.getItem('userData');
    console.log(localStorage.getItem('userData'));

    this.getVerficationTransaction();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerificationtransactionPage');
  }

  getVerficationTransaction(){
    const dataUsername = JSON.parse(localStorage.getItem('userData'));
    this.vertrans.data['username'] = dataUsername.UserPegawaiID;
    this.restProvider.getVerificationTransaction(this.vertrans)
    .then(data => {
      this.responData = data;
      this.dataobject = this.responData["dataobject"];
      this.rowdata = this.dataobject[0];

      console.log(this.dataobject);
    });
  }

}
