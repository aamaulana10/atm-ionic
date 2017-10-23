import { StatusBar } from '@ionic-native/status-bar';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { Events, IonicPage, MenuToggle, NavController, NavParams, ToastController, MenuController } from 'ionic-angular';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  responlogin :any;
  dataobject :any;
  rowdata :any;

  user;
  // username: any;
  // password: any;
  UserData_login =
  {"action":"get_oneusers",
  "basekey":"aXRvdCBhbmRpIGFuY2hhIGFzaW4gdG9tbyBtdWRhaDJhbiBraXRhIHRlcnVzIGJlcnNhbWEgbWVtYmFuZ3VuIG1lbnVqdSByYWhtYXQgYWxsYWg=",
  "userlogin":"loginattemp",
  "data":
        {"user_id":"","user_pass":""}
      };

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private toastCtrl : ToastController, public restProvider: RestProvider,
  public events: Events, public menu: MenuController, public statusBar: StatusBar) {

    this.statusBar.hide();
    this.menu.enable(false);

    const data = JSON.parse(localStorage.getItem('userData'));
    this.user = data;
    console.log(this.user);

    // if(this.user.UserPegawaiID === "admin"){
    //  this.navCtrl.setRoot('HomePage');
    //  }
    //  if(this.user.UserPegawaiID === "petugas1"){
    //   this.navCtrl.setRoot('HomePetugasPage');
    //   }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

login(){
  if(this.UserData_login.data['user_id'] && this.UserData_login.data['user_pass']){
    this.restProvider.getLogin(this.UserData_login).then(
      data => {
        this.responlogin = data;
        this.dataobject = this.responlogin["dataobject"];


        if(this.dataobject[0]==undefined){
          this.presentToast("masukkan data yang valid");
      }
        else{
         this.dataobject = this.responlogin["dataobject"];
         this.rowdata = this.dataobject[0];


          localStorage.setItem("userData", JSON.stringify(this.rowdata));
          this.events.publish('user', localStorage.getItem('userData'));

          if(this.UserData_login.data['user_id'] === "admin"){
            this.navCtrl.setRoot('HomePage');
          }
          else if(this.UserData_login.data['user_id'] === "petugas1"){
            this.navCtrl.setRoot('HomePetugasPage')
          }


      }

        // this.dataobject = this.responlogin["dataobject"];
        // this.rowdata = this.dataobject[0];
        // console.log(this.dataobject[0]);
        // console.log(this.rowdata['UserAkses']);
        // console.log(this.rowdata['UserPegawaiID']);
        // if(this.rowdata['UserAkses']){
        //   localStorage.setItem("userData", JSON.stringify(this.rowdata));
        //   this.navCtrl.setRoot('HomePage');
        // }else{
        //   this.presentToast("masukkan data yang valid");
        // }


      }
    );
  }else {
    this.presentToast("masukkan username dan password");
  }
}

presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 2000,
    position: 'top'
  });
  toast.present();
}

 }



