import { RestProvider } from '../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VerificationservicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verificationservice',
  templateUrl: 'verificationservice.html',
})
export class VerificationservicePage {
  public responData: any;
  dataobject: any;
  rowdata: any;

  verservice =
  {"action":"get_ListDataService",
  "basekey":"aXRvdCBhbmRpIGFuY2hhIGFzaW4gdG9tbyBtdWRhaDJhbiBraXRhIHRlcnVzIGJlcnNhbWEgbWVtYmFuZ3VuIG1lbnVqdSByYWhtYXQgYWxsYWg="
  ,"userlogin":"","data":{"username":""}
};

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public restProvider : RestProvider) {
    localStorage.getItem('userData');
    console.log(localStorage.getItem('userData'));

    this.getVerficationService();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerificationservicePage');
  }

  getVerficationService(){
    const dataUsername = JSON.parse(localStorage.getItem('userData'));
    this.verservice.data['username'] = dataUsername.UserPegawaiID;
    this.restProvider.getVerificationService(this.verservice)
    .then(data => {
      this.responData = data;
      this.dataobject = this.responData["dataobject"];
      this.rowdata = this.dataobject[0];

      console.log(this.dataobject);
    });
  }

}
