import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the ManajemenrolemenutambahPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manajemenrolemenutambah',
  templateUrl: 'manajemenrolemenutambah.html',
})
export class ManajemenrolemenutambahPage {

  public responTambah:any;
  dataobject:any;
  rowdata:any;

  role = {"action":"add_menurole",
          "basekey":"aXRvdCBhbmRpIGFuY2hhIGFzaW4gdG9tbyBtdWRhaDJhbiBraXRhIHRlcnVzIGJlcnNhbWEgbWVtYmFuZ3VuIG1lbnVqdSByYWhtYXQgYWxsYWg=",
          "userlogin":"",
          "data":{"RoleCode":"",
                  "RoleName":""}}

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public toastCtrl : ToastController,
              public restProvider: RestProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManajemenrolemenutambahPage');
  }

  addmenuRole(){
    this.restProvider.addManajemenRoleMenu(this.role)
    .then(data =>{
      this.responTambah = data;
      this.dataobject = this.responTambah['dataobject'];
      console.log(this.dataobject);

    })
  }

  postData(){
    if(this.role.data.RoleCode === ""){
      this.sendNotification('Masukkan role Code')
    }
    else if(this.role.data.RoleName === ""){
      this.sendNotification("Masukkan nama ");
    }
    else{
      this.addmenuRole();
      this.sendNotification('Data berhasil ditambah');
      this.navCtrl.setRoot('ManajemenrolemenuPage');
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
