import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MasteratmdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-masteratmdetail',
  templateUrl: 'masteratmdetail.html',
})
export class MasteratmdetailPage {
  //isNew: boolean = false;
  visibleRow : boolean = false;
  respon: any;
  dataobject: any;
  items;
  responAtmDetail: any;
  dataobjectDetail: any;
  rowdata: any;
  isSearch: boolean = false;
  atmSrc =
  {"action":"get_masteratms_src",
  "basekey":"aXRvdCBhbmRpIGFuY2hhIGFzaW4gdG9tbyBtdWRhaDJhbiBraXRhIHRlcnVzIGJlcnNhbWEgbWVtYmFuZ3VuIG1lbnVqdSByYWhtYXQgYWxsYWg=",
  "userlogin":"",
  "data":{"ClientID":""}}

  constructor(public navCtrl: NavController, public navParams: NavParams,
            public restProvider : RestProvider) {
              localStorage.getItem('userData');
    const data = this.navParams.get('detail');
    this.respon = data;
    this.dataobject = this.respon.ftbank_code;

    console.log(this.dataobject);

    localStorage.getItem('dataAtm');
    console.log(localStorage.getItem('dataAtm'));

    this.getAtmDetail();
    this.initializeItems();
    {
       this.items = this.dataobjectDetail;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MasteratmdetailPage');
  }

  ionViewWillEnter(){
    this.navParams.get('detail');
    console.log(this.navParams.get('detail'));

    this.getAtmDetail();
   }

   getAtmDetail(){
     this.atmSrc.data['ClientID'] = this.respon.ftbank_code;
     this.restProvider.getMasterATMDasboard(this.atmSrc)
     .then(data => {
      this.responAtmDetail = data;
      this.dataobjectDetail = this.responAtmDetail["dataobject"];
      this.rowdata = this.dataobject[0];

      this.initializeItems();
      console.log(this.dataobjectDetail);
    });
   }

   tambah(){
     this.navCtrl.push('MasteratmtambahPage');
   }

   // search start ====================================================================================
   initializeItems()
   {
      this.items = this.dataobjectDetail;
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

   search(){
    this.isSearch = !this.isSearch;
  }

}
