import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the HomePetugasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-petugas',
  templateUrl: 'home-petugas.html',
})
export class HomePetugasPage {
  public responPending: any;
  dataobject: any;
  rowdata: any;
  user;

  pending =
  {"action":"get_DataPendingJOrder",
  "basekey":"aXRvdCBhbmRpIGFuY2hhIGFzaW4gdG9tbyBtdWRhaDJhbiBraXRhIHRlcnVzIGJlcnNhbWEgbWVtYmFuZ3VuIG1lbnVqdSByYWhtYXQgYWxsYWg="
  ,"userlogin":"","data":{"UserID":""}
};

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public restProvider: RestProvider, public menu: MenuController) {
                this.menu.enable(true);
                const data = JSON.parse(localStorage.getItem('userData'));
                this.user = data;
                this.pending.userlogin = this.user.UserPegawaiID;
                console.log(this.user.UserPegawaiID);

    this.getDataPendingJobOrder();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePetugasPage');
  }

  getDataPendingJobOrder(){
    const dataUsername = JSON.parse(localStorage.getItem('userData'));
    this.pending.data['UserID'] = dataUsername.UserPegawaiID;
    this.restProvider.getPendingJobOrderIndex(this.pending)
    .then(data => {
      this.responPending = data;
      this.dataobject = this.responPending["dataobject"];
      this.rowdata = this.dataobject[0];

      console.log(this.dataobject);
    });
  }

}
