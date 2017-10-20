import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PendingtransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pendingtransaction',
  templateUrl: 'pendingtransaction.html',
})
export class PendingtransactionPage {
  public responPending: any;
  dataobject: any;
  rowdata: any;
  items;

  public tes:any;

  open: boolean = true;

  isSearch: any;

  pending =
  {"action":"get_pendings",
  "basekey":"aXRvdCBhbmRpIGFuY2hhIGFzaW4gdG9tbyBtdWRhaDJhbiBraXRhIHRlcnVzIGJlcnNhbWEgbWVtYmFuZ3VuIG1lbnVqdSByYWhtYXQgYWxsYWg="
  ,"userlogin":"","data":{"username":""}
};

  constructor(public navCtrl: NavController, public navParams: NavParams,
            public restProvider : RestProvider) {
      localStorage.getItem('userData');
      console.log(localStorage.getItem('userData'));

      this.getDataPendingTransaction();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendingtransactionPage');

  }

  getDataPendingTransaction(){
    const dataUsername = JSON.parse(localStorage.getItem('userData'));
    this.pending.data['username'] = dataUsername.UserPegawaiID;
    this.restProvider.getPendingTransaction(this.pending)
    .then(data => {
      this.responPending = data;
      this.dataobject = this.responPending["dataobject"];
      this.rowdata = this.dataobject[0];


      this.initializeItems();
      console.log(this.dataobject);
    });
  }


  // search start ====================================================================================
  initializeItems()
  {
     this.items = this.dataobject;
     this.tes = this.items['fnbefore'];
     console.log(this.tes);

     console.log(this.items);

  }

  getItems(ev) {
   // Reset items back to all of the items
   this.initializeItems();



   // set val to the value of the ev target
   var val = ev.target.value;

   // if the value is an empty string don't filter the items
   if (val && val.trim() != '') {
     this.items = this.items.filter((pendings) => {

       return (pendings.fttransaction_code.toLowerCase().indexOf(val.toLowerCase()) > -1);

     })
   }
 }
  // search end ====================================================================================

    search(){
      this.isSearch = !this.isSearch;
    }

}
