import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MasteratmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-masteratm',
  templateUrl: 'masteratm.html',
})
export class MasteratmPage {
  public responATM: any;
  dataobject: any;
  rowdata: any;
  items;

  atms =
  {"action":"get_masteratms",
  "basekey":"aXRvdCBhbmRpIGFuY2hhIGFzaW4gdG9tbyBtdWRhaDJhbiBraXRhIHRlcnVzIGJlcnNhbWEgbWVtYmFuZ3VuIG1lbnVqdSByYWhtYXQgYWxsYWg=",
  "userlogin":""
   };

  constructor(public navCtrl: NavController, public navParams: NavParams,
            public restProvider: RestProvider) {
    localStorage.getItem('userData');
    console.log(localStorage.getItem('userData'));

    this.getMasterATM();
    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MasteratmPage');
  }

  getMasterATM(){
    this.restProvider.getMasterATM(this.atms)
    .then(data => {
      this.responATM = data;
      this.dataobject = this.responATM["dataobject"];
      this.rowdata = this.dataobject[0];

      this.initializeItems();
      console.log(this.dataobject);
    });
  }

  tambah(){
    this.navCtrl.push('MasteratmtambahPage');
  }

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

       return (a.atmID.toLowerCase().indexOf(val.toLowerCase()) > -1);

     })
   }
 }
  // search end ====================================================================================


}
