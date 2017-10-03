import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ManajemenrolemenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manajemenrolemenu',
  templateUrl: 'manajemenrolemenu.html',
})
export class ManajemenrolemenuPage {
  public responRoleMenu: any;
  dataobject: any;
  rowdata: any;

  roleMenu =
  {"action":"get_menurolelist",
  "basekey":"aXRvdCBhbmRpIGFuY2hhIGFzaW4gdG9tbyBtdWRhaDJhbiBraXRhIHRlcnVzIGJlcnNhbWEgbWVtYmFuZ3VuIG1lbnVqdSByYWhtYXQgYWxsYWg=",
  "userlogin":""
   };

  constructor(public navCtrl: NavController, public navParams: NavParams,
            public restProvider: RestProvider) {
      localStorage.getItem('userData');
      console.log(localStorage.getItem('userData'));

      this.getManajemenMenuRole();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManajemenrolemenuPage');
  }

  getManajemenMenuRole(){
    this.restProvider.getManajemenRoleMenu(this.roleMenu)
    .then(data => {
      this.responRoleMenu = data;
      this.dataobject = this.responRoleMenu["dataobject"];
      this.rowdata = this.dataobject[0];

      console.log(this.dataobject);
    });
  }

}
