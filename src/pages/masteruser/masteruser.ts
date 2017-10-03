import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MasteruserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-masteruser',
  templateUrl: 'masteruser.html',
})
export class MasteruserPage {
  public responUser: any;
  dataobject: any;
  rowdata: any;

  users =
  {"action":"get_useratms",
  "basekey":"aXRvdCBhbmRpIGFuY2hhIGFzaW4gdG9tbyBtdWRhaDJhbiBraXRhIHRlcnVzIGJlcnNhbWEgbWVtYmFuZ3VuIG1lbnVqdSByYWhtYXQgYWxsYWg=",
  "userlogin":""
   };

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public restProvider : RestProvider) {
    localStorage.getItem('userData');
    console.log(localStorage.getItem('userData'));

    this.getUserList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MasteruserPage');
  }

  getUserList(){
    this.restProvider.getMasterUser(this.users)
    .then(data => {
      this.responUser = data;
      this.dataobject = this.responUser["dataobject"];
      this.rowdata = this.dataobject[0];

      console.log(this.dataobject);
    });
  }

}
