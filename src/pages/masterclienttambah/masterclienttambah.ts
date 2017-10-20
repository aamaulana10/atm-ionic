import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the MasterclienttambahPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-masterclienttambah',
  templateUrl: 'masterclienttambah.html',
})
export class MasterclienttambahPage {
  public responColor:any;
  dataobjectColor: any;
  rowdataColor: any;

  public responTambah:any;
  dataobject: any;
  rowdata: any;

  color = {"action":"get_mastercolors",
          "basekey":"aXRvdCBhbmRpIGFuY2hhIGFzaW4gdG9tbyBtdWRhaDJhbiBraXRhIHRlcnVzIGJlcnNhbWEgbWVtYmFuZ3VuIG1lbnVqdSByYWhtYXQgYWxsYWg=",
          "userlogin":""};

  client = {"action":"add_masterclient",
          "basekey":"aXRvdCBhbmRpIGFuY2hhIGFzaW4gdG9tbyBtdWRhaDJhbiBraXRhIHRlcnVzIGJlcnNhbWEgbWVtYmFuZ3VuIG1lbnVqdSByYWhtYXQgYWxsYWg=",
          "userlogin":"",
          "data":{"ClientID":"",
                  "ClientName":"",
                  "ClientAddress":"",
                  "ClientPIC":"",
                  "ClientPhone":"",
                  "ClientEmail":"",
                  "ClientStatus":"",
                  "ClientColor":""}}


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public restProvider: RestProvider,
              public toastCtrl: ToastController) {

              localStorage.getItem('userData');
              this.getColor();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MasterclienttambahPage');
  }

  getColor(){
    this.restProvider.addMasterclient(this.color)
    .then(data =>{
      this.responColor = data;
      this.dataobjectColor = this.responColor['dataobject'];
      console.log(this.dataobjectColor);
    })
  }

  addClient(){
    this.restProvider.addMasterclient(this.client)
    .then(data =>{
      this.responTambah = data;
      this.dataobject = this.responTambah['dataobject'];
      console.log(this.dataobject);

    })
  }

  postData(){
    if(this.client.data.ClientID === ""){
      this.sendNotification("Masukkan Id Client");
    }
    else if(this.client.data.ClientName === ""){
      this.sendNotification("Masukkan nama bank")
    }
    else if(this.client.data.ClientAddress === ""){
      this.sendNotification("Masukkan alamat Client")
    }
    else if(this.client.data.ClientPIC === ""){
      this.sendNotification("Masukkan PIC Client")
    }
    else if(this.client.data.ClientPhone === ""){
      this.sendNotification("Masukkan nomor telepon")
    }
    else if(this.client.data.ClientEmail === ""){
      this.sendNotification("Masukkan Email")
    }
    else if(this.client.data.ClientStatus === ""){
      this.sendNotification("Pilih status")
    }
    else if(this.client.data.ClientColor === ""){
      this.sendNotification("Pilih warna")
    }
    else{
      this.addClient();
      this.sendNotification("Client berhasil ditambah");
      this.navCtrl.setRoot('MasterclientPage');
    }
  }

  back(){
    this.navCtrl.pop();
  }

  sendNotification(message)  : void
  {
     let notification = this.toastCtrl.create({
         message       : message,
         duration      : 2000,
         position: 'top'

     });
     notification.present();
  }

  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

}
