import { RestProvider } from '../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public responAtm : any;
  responAtmInfo : any;
  dataobject :any;
  rowdata :any;
  public cssClass: any;
  atmInfo =
  {"action":"get_DataATMInfo",
  "basekey":"aXRvdCBhbmRpIGFuY2hhIGFzaW4gdG9tbyBtdWRhaDJhbiBraXRhIHRlcnVzIGJlcnNhbWEgbWVtYmFuZ3VuIG1lbnVqdSByYWhtYXQgYWxsYWg=",
  "userlogin":""
   };

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public restProvider : RestProvider) {
    localStorage.getItem('userData');

    const data = JSON.parse(localStorage.getItem('userData'));
    this.responAtm = data;
    this.atmInfo.userlogin = this.responAtm.UserPegawaiID;
    console.log(this.atmInfo.userlogin);

    //console.log(this.getATMInfo());
    this.getATMInfo();


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  getATMInfo(){
    this.restProvider.getDataAtm(this.atmInfo)
    .then(data => {
      this.responAtmInfo = data;
      this.dataobject = this.responAtmInfo["dataobject"];
      this.rowdata = this.dataobject[0];

      console.log(this.dataobject);
    });
  }

 logout(){
   localStorage.clear();
   this.navCtrl.setRoot('LoginPage');
 }

}
