import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PendingjoborderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pendingjoborder',
  templateUrl: 'pendingjoborder.html',
})
export class PendingjoborderPage {
  public responPending: any;
  dataobject: any;
  rowdata: any;
  items;

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

    this.getDataPendingJobOrder();
    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendingjoborderPage');
  }

  getDataPendingJobOrder(){
    const dataUsername = JSON.parse(localStorage.getItem('userData'));
    this.pending.data['username'] = dataUsername.UserPegawaiID;
    this.restProvider.getPendingJobOrder(this.pending)
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

       return (pendings.ftservice_code.toLowerCase().indexOf(val.toLowerCase()) > -1);

     })
   }
 }
  // search end ====================================================================================

  tambah(){
    this.navCtrl.push('CreateservicePage');
  }

  search(){
    this.isSearch = !this.isSearch;
  }

}
