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
  items;

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
      this.initializeItems();
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

      this.initializeItems();
      console.log(this.dataobject);
    });
  }

  tambah(){
    this.navCtrl.push('ManajemenrolemenutambahPage');
  }


   // search start ====================================================================================
   initializeItems()
   {
      this.items = this.dataobject;
      console.log(this.items);

   }

   getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((role) => {

        return (role.RoleCode.toLowerCase().indexOf(val.toLowerCase()) > -1);

      })
    }
  }
   // search end ====================================================================================


}
