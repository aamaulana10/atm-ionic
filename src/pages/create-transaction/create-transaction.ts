import { RestProvider } from '../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CreateTransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-transaction',
  templateUrl: 'create-transaction.html',
})
export class CreateTransactionPage {

  isStart: boolean = false;
  waktuServer;
  dataobjectwaktu;
  rowdatawaktu;

  user;

  public responOneATM: any;
  dataobjectOneATM: any;
  rowDataOneATM: any;

  serverTime = {"action":"get_FieldServer"};

  atmone = {"action":"get_onemasteratms",
            "basekey":"aXRvdCBhbmRpIGFuY2hhIGFzaW4gdG9tbyBtdWRhaDJhbiBraXRhIHRlcnVzIGJlcnNhbWEgbWVtYmFuZ3VuIG1lbnVqdSByYWhtYXQgYWxsYWg=",
            "userlogin":"",
            "data":{"atmID":"","atmName":"","atmLokasi":""}}

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public restProvider: RestProvider) {
        this.getWaktuServer();
        const data = JSON.parse(localStorage.getItem('userData'));
        this.user = data;
        this.atmone.userlogin = this.user.UserPegawaiID;

        //this.getOneMasterATM();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateTransactionPage');
  }

  getWaktuServer(){
    this.restProvider.getWaktuServer(this.serverTime)
    .then(data =>{
      this.waktuServer = data;
      this.dataobjectwaktu = this.waktuServer['dataobject'];
      //this.dataobjectwaktu.yyyymmddhhmmFromServer
      console.log(this.dataobjectwaktu[0]['yyyymmddhhmmssFromServer']);
    })
  }

  getOneMasterATM(){
      this.restProvider.createTransactionGetOneATM(this.atmone)
      .then(data =>{
        this.responOneATM = data;
        this.dataobjectOneATM = this.responOneATM['dataobject'];
        console.log(this.dataobjectOneATM);

      })
    //this.isStart = !this.isStart;
  }

  start(){
    if(this.atmone.data['atmID'] != ""){
      this.getOneMasterATM();
      this.isStart = !this.isStart;
    }else{
      alert('ID ATM tidak ditemukan');
    }
  }

}
