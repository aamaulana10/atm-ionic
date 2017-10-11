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
  items;
  isSearch: boolean = false;

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
    this.initializeItems();
    {
       this.items = this.dataobject;
    }
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

      this.initializeItems();
      console.log(this.dataobject);
    });
  }

  tambah(){
    this.navCtrl.push('MasterusertambahPage')
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
     this.items = this.items.filter((a) => {

       return (a.Username.toLowerCase().indexOf(val.toLowerCase()) > -1);

     })
   }
 }
  // search end ====================================================================================

  search(){
    this.isSearch = !this.isSearch;
  }
}
