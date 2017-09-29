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
  responAtmTagging : any;
  responAtmTask : any;
  responAtmJobOrder: any;
  dataobject :any;
  rowdata :any;
  dataobjectTagging :any;
  rowdataTagging :any;
  dataobjectTaskInfo :any;
  rowdataTaskinfo :any;
  dataobjectJobOrder :any;
  rowdataJobOrder :any;
  public cssClass: any;
  atmInfo =
  {"action":"get_DataATMInfo",
  "basekey":"aXRvdCBhbmRpIGFuY2hhIGFzaW4gdG9tbyBtdWRhaDJhbiBraXRhIHRlcnVzIGJlcnNhbWEgbWVtYmFuZ3VuIG1lbnVqdSByYWhtYXQgYWxsYWg=",
  "userlogin":""
   };

   atmTagging =
   {"action":"get_DataTaggingInfo",
   "basekey":"aXRvdCBhbmRpIGFuY2hhIGFzaW4gdG9tbyBtdWRhaDJhbiBraXRhIHRlcnVzIGJlcnNhbWEgbWVtYmFuZ3VuIG1lbnVqdSByYWhtYXQgYWxsYWg=",
   "userlogin":""
    };

    atmTaskinfo =
    {"action":"get_DataTaskInfo",
    "basekey":"aXRvdCBhbmRpIGFuY2hhIGFzaW4gdG9tbyBtdWRhaDJhbiBraXRhIHRlcnVzIGJlcnNhbWEgbWVtYmFuZ3VuIG1lbnVqdSByYWhtYXQgYWxsYWg=",
    "userlogin":""
     };

     atmJobOrder =
     {"action":"get_DataClosingJOrder",
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
    this.getATMTagging();
    this.getATMTaskInfo();
    this.getATMJobOrder();

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

      console.log(this.rowdata);
    });
  }

  detailbank(name){
    if(name){
      console.log(name);
    }
  }

  getATMTagging(){
    this.restProvider.getDataAtm(this.atmTagging)
    .then(data => {
      this.responAtmTagging = data;
      this.dataobjectTagging = this.responAtmInfo["dataobject"];
      this.rowdataTagging = this.dataobjectTagging[0];

      console.log(this.dataobjectTagging);
    });
  }

  getATMTaskInfo(){
    this.restProvider.getDataAtm(this.atmTaskinfo)
    .then(data => {
      this.responAtmTask = data;
      this.dataobjectTaskInfo = this.responAtmTask["dataobject"];
      this.rowdataTaskinfo = this.dataobjectTaskInfo[0];

      console.log(this.dataobjectTaskInfo);
    });
  }

  getATMJobOrder(){
    this.restProvider.getDataAtm(this.atmJobOrder)
    .then(data => {
      this.responAtmJobOrder = data;
      this.dataobjectJobOrder = this.responAtmJobOrder["dataobject"];
      this.rowdataJobOrder = this.dataobjectJobOrder[0];

      console.log(this.dataobjectJobOrder);
    });
  }

 logout(){
   localStorage.clear();
   this.navCtrl.setRoot('LoginPage');
 }

}
