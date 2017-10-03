import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DataservicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dataservice',
  templateUrl: 'dataservice.html',
})
export class DataservicePage {
  public responData: any;
  dataobject: any;
  rowdata: any;

  service =
  {"action":"get_DataService",
  "basekey":"aXRvdCBhbmRpIGFuY2hhIGFzaW4gdG9tbyBtdWRhaDJhbiBraXRhIHRlcnVzIGJlcnNhbWEgbWVtYmFuZ3VuIG1lbnVqdSByYWhtYXQgYWxsYWg="
  ,"userlogin":"","data":{"username":""}
};

  constructor(public navCtrl: NavController, public navParams: NavParams,
            public restProvider : RestProvider) {
      localStorage.getItem('userData');
      console.log(localStorage.getItem('userData'));

      this.getDataService();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DataservicePage');
  }

  getDataService(){
    const dataUsername = JSON.parse(localStorage.getItem('userData'));
    this.service.data['username'] = dataUsername.UserPegawaiID;
    this.restProvider.getDataService(this.service)
    .then(data => {
      this.responData = data;
      this.dataobject = this.responData["dataobject"];
      this.rowdata = this.dataobject[0];

      console.log(this.dataobject);
    });

  }

}
