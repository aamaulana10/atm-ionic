import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AlertController  } from 'ionic-angular';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = 'http://localhost/atm/Interface';

  constructor(public http: Http, private alertCtrl:AlertController) {
    console.log('Hello RestProvider Provider');
  }

  getLogin(data) {
    return new Promise(resolve => {
      this.http.post(this.apiUrl+'/IUserPegawai.php', JSON.stringify(data))
    .map(res => res.json())
    .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      this.presentToast();
      });
    });
  }

  getDataAtm(data){
    return new Promise(resolve => {
      this.http.post(this.apiUrl+'/ITrdata_index.php', JSON.stringify(data))
    .map(res => res.json())
    .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      this.presentToast();
      });
    });
  }


  // getLogin(data){
  //   return new Promise((resolve) => {
  //   this.http.post(this.apiUrl+'/IUserPegawai.php', JSON.stringify(data))
  //     .subscribe(data => {
  //       resolve(data);
  //     }, (err) => {
  //       this.presentToast();
  //     });
  // });
  // }

  presentToast() {
    let alert = this.alertCtrl.create({
     // title: 'Cek Connection ! gagal mengambil data',
      message: 'mohon cek koneksi !<br> gagal mengambil data ke server',
      buttons: [
        {
          text: 'ok',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    alert.present();
  }

}
