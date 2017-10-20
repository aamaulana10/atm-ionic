import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the MasterusertambahPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-masterusertambah',
  templateUrl: 'masterusertambah.html',
})
export class MasterusertambahPage {
  public responHakakses: any;
  dataobjectAkses: any;
  rowdataAkses: any;

  public responTambah: any;
  dataobject: any;
  rowdata: any;

  user = {"action":"add_useratm",
          "basekey":"aXRvdCBhbmRpIGFuY2hhIGFzaW4gdG9tbyBtdWRhaDJhbiBraXRhIHRlcnVzIGJlcnNhbWEgbWVtYmFuZ3VuIG1lbnVqdSByYWhtYXQgYWxsYWg=",
          "userlogin":"",
          "data":{"Username":"",
                  "UserCompany":"",
                  "UserAkses":"",
                  "Password":""}};

  hakakses = {"action":"get_Previledge",
  "basekey":"aXRvdCBhbmRpIGFuY2hhIGFzaW4gdG9tbyBtdWRhaDJhbiBraXRhIHRlcnVzIGJlcnNhbWEgbWVtYmFuZ3VuIG1lbnVqdSByYWhtYXQgYWxsYWg=",
  "userlogin":""};

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public restProvider : RestProvider,
              public toastCtrl : ToastController) {

              localStorage.getItem('userData');
              this.listhakakses();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MasterusertambahPage');
  }

  listhakakses(){
    this.restProvider.addMasterUser(this.hakakses)
    .then(data => {
      this.responHakakses = data;
      this.dataobjectAkses = this.responHakakses['dataobject'];
      console.log(this.dataobjectAkses);
    });
  }

  tambahUser(){
    this.restProvider.addMasterUser(this.user)
    .then(data => {
      this.responTambah = data['messege'];
      console.log(this.responTambah);
    });
  }

  postData(){
    if(this.user.data['Username']==="")
    {this.sendNotification('Masukkan Username');}
 else if(this.user.data['UserCompany']==="")
    {this.sendNotification('Pilih Nama Company');}
 else if(this.user.data['UserAkses']==="")
    {this.sendNotification('Pilih Hak Akses');}
 else if(this.user.data['Password']==="")
    {this.sendNotification('Masukkan Password');}
 else{
     //this.uploadImage();
     this.tambahUser();
     this.sendNotification("User berhasil ditambah");
     this.navCtrl.setRoot('MasteruserPage');
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
