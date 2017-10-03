import { RestProvider } from '../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VerificationjoborderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verificationjoborder',
  templateUrl: 'verificationjoborder.html',
})
export class VerificationjoborderPage {
  public responData: any;
  dataobject: any;
  rowdata: any;

  verJobOrder =
  {"action":"get_ListDataJOrder",
  "basekey":"aXRvdCBhbmRpIGFuY2hhIGFzaW4gdG9tbyBtdWRhaDJhbiBraXRhIHRlcnVzIGJlcnNhbWEgbWVtYmFuZ3VuIG1lbnVqdSByYWhtYXQgYWxsYWg="
  ,"userlogin":"","data":{"username":""}
};

  constructor(public navCtrl: NavController, public navParams: NavParams,
            public restProvider : RestProvider) {
    localStorage.getItem('userData');
    console.log(localStorage.getItem('userData'));

    this.getVerficationJobOrder();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerificationjoborderPage');
  }

  getVerficationJobOrder(){
    const dataUsername = JSON.parse(localStorage.getItem('userData'));
    this.verJobOrder.data['username'] = dataUsername.UserPegawaiID;
    this.restProvider.getVerificationJobOrder(this.verJobOrder)
    .then(data => {
      this.responData = data;
      this.dataobject = this.responData["dataobject"];
      this.rowdata = this.dataobject[0];

      console.log(this.dataobject);
    });
  }

}
