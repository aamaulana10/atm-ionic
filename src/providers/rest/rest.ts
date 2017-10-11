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

  apiUrl = 'http://192.168.0.113/atm/Interface';

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

  getMasterATM(data){
    return new Promise(resolve => {
      this.http.post(this.apiUrl+'/IMasteratm.php', JSON.stringify(data))
    .map(res => res.json())
    .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      this.presentToast();
      });
    });
  }

  getMasterATMDasboard(data){
    return new Promise(resolve => {
      this.http.post(this.apiUrl+'/IMasteratm.php', JSON.stringify(data))
    .map(res => res.json())
    .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      this.presentToast();
      });
    });
  }

  getMasterUser(data){
    return new Promise(resolve => {
      this.http.post(this.apiUrl+'/IUserAtm.php', JSON.stringify(data))
    .map(res => res.json())
    .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      this.presentToast();
      });
    });
  }

  getMasterclient(data){
    return new Promise(resolve => {
      this.http.post(this.apiUrl+'/IMasterclient.php', JSON.stringify(data))
    .map(res => res.json())
    .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      this.presentToast();
      });
    });
  }

  getManajemenRoleMenu(data){
    return new Promise(resolve => {
      this.http.post(this.apiUrl+'/Imenurole.php', JSON.stringify(data))
    .map(res => res.json())
    .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      this.presentToast();
      });
    });
  }

  getPendingTransaction(data){
    return new Promise(resolve => {
      this.http.post(this.apiUrl+'/ITrpending_trans.php', JSON.stringify(data))
    .map(res => res.json())
    .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      this.presentToast();
      });
    });
  }

  getPendingService(data){
    return new Promise(resolve => {
      this.http.post(this.apiUrl+'/ITrpending_service.php', JSON.stringify(data))
    .map(res => res.json())
    .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      this.presentToast();
      });
    });
  }

  getPendingJobOrder(data){
    return new Promise(resolve => {
      this.http.post(this.apiUrl+'/ITrpending_jorder.php', JSON.stringify(data))
    .map(res => res.json())
    .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      this.presentToast();
      });
    });
  }

  getDataTransaction(data){
    return new Promise(resolve => {
      this.http.post(this.apiUrl+'/ITrdata_trans.php', JSON.stringify(data))
    .map(res => res.json())
    .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      this.presentToast();
      });
    });
  }

  getDataService(data){
    return new Promise(resolve => {
      this.http.post(this.apiUrl+'/ITrdata_service.php', JSON.stringify(data))
    .map(res => res.json())
    .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      this.presentToast();
      });
    });
  }

  getDataJobOrder(data){
    return new Promise(resolve => {
      this.http.post(this.apiUrl+'/ITrdata_jorder.php', JSON.stringify(data))
    .map(res => res.json())
    .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      this.presentToast();
      });
    });
  }

  getVerificationTransaction(data){
    return new Promise(resolve => {
      this.http.post(this.apiUrl+'/ITrdata_trans.php', JSON.stringify(data))
    .map(res => res.json())
    .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      this.presentToast();
      });
    });
  }

  getVerificationService(data){
    return new Promise(resolve => {
      this.http.post(this.apiUrl+'/ITrdata_service.php', JSON.stringify(data))
    .map(res => res.json())
    .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      this.presentToast();
      });
    });
  }

  getVerificationJobOrder(data){
    return new Promise(resolve => {
      this.http.post(this.apiUrl+'/ITrdata_jorder.php', JSON.stringify(data))
    .map(res => res.json())
    .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      this.presentToast();
      });
    });
  }

  addMasterATM(data){
    return new Promise(resolve => {
      this.http.post(this.apiUrl+'/IMasteratm.php', JSON.stringify(data))
    .map(res => res.json())
    .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      this.presentToast();
      });
    });
  }

  addMasterATMAttach(data){
    return new Promise(resolve => {
      this.http.post(this.apiUrl+'/Itiketing_anggota_dan_admin.php', JSON.stringify(data))
    .map(res => res.json())
    .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      this.presentToast();
      });
    });
  }



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
