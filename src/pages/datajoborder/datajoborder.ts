import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DatajoborderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datajoborder',
  templateUrl: 'datajoborder.html',
})
export class DatajoborderPage {
  public responData: any;
  dataobject: any;
  rowdata: any;

  jobOrder =
  {"action":"get_DataJOrder",
  "basekey":"aXRvdCBhbmRpIGFuY2hhIGFzaW4gdG9tbyBtdWRhaDJhbiBraXRhIHRlcnVzIGJlcnNhbWEgbWVtYmFuZ3VuIG1lbnVqdSByYWhtYXQgYWxsYWg="
  ,"userlogin":"","data":{"username":""}
};

  constructor(public navCtrl: NavController, public navParams: NavParams,
            public restProvider : RestProvider) {
    localStorage.getItem('userData');
    console.log(localStorage.getItem('userData'));

    this.getDataJobOrder();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatajoborderPage');
  }

  getDataJobOrder(){
    const dataUsername = JSON.parse(localStorage.getItem('userData'));
    this.jobOrder.data['username'] = dataUsername.UserPegawaiID;
    this.restProvider.getDataJobOrder(this.jobOrder)
    .then(data => {
      this.responData = data;
      this.dataobject = this.responData["dataobject"];
      this.rowdata = this.dataobject[0];

      console.log(this.dataobject);
    });

  }

}
