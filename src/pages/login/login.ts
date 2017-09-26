import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
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
  private toastCtrl : ToastController, public restProvider: RestProvider) {

    if(localStorage.getItem('userData')){
     this.navCtrl.setRoot('HomePage');
     }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
//   loginAdmin(){
//     if(this.UserData_login.data['user_id'] && this.UserData_login.data['user_pass']){

//    this.restProvider.getLogin(this.UserData_login)
//    .then(data => {
//      this.responlogin = data[0];
//      console.log(this.responlogin);

//      if(this.responlogin){
//           localStorage.setItem('userData', JSON.stringify(this.responlogin));
//           this.navCtrl.setRoot('HomePage');
//         // if(this.responlogin['flag']==="1"){
//            //this.presentToast("go to reset pass new");
//           // localStorage.setItem('userData', JSON.stringify(this.responlogin) )
//           // this.mytransition1();
//           // this.navCtrl.push(Changepass);
//         //  }
//         //  else{
//         //   localStorage.setItem('userData', JSON.stringify(this.responlogin) )
//         //   //this.mytransition1();
//         //   this.navCtrl.setRoot('HomePage');
//          // }

//      }
//      else{
//         this.presentToast("Silahkan Masukan NIP Dan Password Yang Valid");
//         }



//    });

//   }
//   else{
//    this.presentToast("Masukan NIP Dan Password");
//   }
// }

loginAdmin(){
  if(this.UserData_login.data['user_id'] && this.UserData_login.data['user_pass']){
    this.restProvider.getLogin(this.UserData_login).then(
      data => {
        this.responlogin = data;
        this.dataobject = this.responlogin["dataobject"];
        this.rowdata = this.dataobject[0];
        console.log(this.dataobject[0]);
        console.log(this.rowdata['UserAkses']);
        console.log(this.rowdata['UserPegawaiID']);
        if(this.rowdata){
          localStorage.setItem("userData", JSON.stringify(this.rowdata));
          this.navCtrl.setRoot('HomePage');
        }else{
          this.presentToast("masukkan data yang valid");
        }
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



