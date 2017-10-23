import { Component, ViewChild } from '@angular/core';
import { AlertController, MenuController, Nav, Platform, NavParams, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'LoginPage';

  menuadmin : boolean = false;
  menupetugas1 : boolean = false;
  noakun : boolean = false;

  public userDetails : any;
  // userId : any;
  // userEmail : any;

  userLogin = {
    "userId": "",
    "userEmail": "",

  };

  showLevel1 = null;
  showLevel2 = null;
  showLevel3 = null;
  showLevel4 = null;
  showLevel5 = null;
  showLevel6 = null;
  showLevel7 = null;
  showLevel8 = null;
  showLevel9 = null;

  //pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
     public statusBar: StatusBar,
     public splashScreen: SplashScreen,
     public restProvider: RestProvider,
     public alertCtrl : AlertController,
     public menu : MenuController,
     public events: Events) {

      // this.userLogin.userId = "RAKSYST";
      // this.userLogin.userEmail = "ananta kriya";
      // this.noakun = !this.noakun;

      localStorage.getItem('userData');
      //const datauser = JSON.parse(localStorage.getItem('userData'));

      events.subscribe('user', (user)=>{
        console.log(JSON.parse(user));

        const data = JSON.parse(user);
        if(data['UserPegawaiID'] === 'admin'){
          this.userLogin.userId = data['UserPegawaiID'];
          this.userLogin.userEmail = data['UserPegawaiEmail'];
           this.menuadmin = true
           this.menupetugas1 = false;
           //this.noakun = false;

        }
        if(data['UserPegawaiID'] === 'petugas1'){
          this.userLogin.userId = data['UserPegawaiID'];
          this.userLogin.userEmail = data['UserPegawaiEmail'];
          this.menupetugas1 = true;
          this.menuadmin = false;
          //this.noakun = false;

        }

      })




      this.initializeApp();





    // used for an example of ngFor and navigation
    // this.pages = [
    //   { title: 'Login', component: 'LoginPage' },
    //   { title: 'Home', component: 'HomePage' }
    // ];

  }




  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.overlaysWebView(false);
      this.statusBar.hide();
      this.splashScreen.hide();
      this.menu.close();

      const data = JSON.parse(localStorage.getItem('userData'));
      this.userDetails = data;
      if(data['UserPegawaiID'] === 'admin'){
        this.userLogin.userId = data['UserPegawaiID'];
        this.userLogin.userEmail = data['UserPegawaiEmail'];
         this.menuadmin = true
         this.menupetugas1 = false;
         //this.noakun = false;

      }
      if(data['UserPegawaiID'] === 'petugas1'){
        //this.statusBar.hide();
        this.userLogin.userId = data['UserPegawaiID'];
        this.userLogin.userEmail = data['UserPegawaiEmail'];
        this.menupetugas1 = true;
        this.menuadmin = false;
        //this.noakun = false;

      }

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }


  logout(){
    let alert = this.alertCtrl.create({
        // title: 'Logout',
        message: 'Notification',
        buttons: [
          {
            text: 'Change Password',
            handler: () => {
            // this.menu.enable(false);
            // this.nativePageTransitions.fade(options);
            this.nav.push('Changepass');
            }
          },
         // {
         //    text: '',
         //    role: 'cancel',
         //    handler: () => {
         //      console.log('Cancel clicked');
         //    }
         //  },
          {
            text: 'Logout',
            handler: () => {
              this.menu.enable(false);
             // localStorage.removeItem('userData');
            localStorage.clear();
            //this.nav.destroy();
            this.nav.setRoot('LoginPage');
            }
          }
        ]
      });
      alert.present();
  }

  toggleLevel1(idx) {
    if (this.isLevel1Shown(idx)) {
      this.showLevel1 = null;
      this.showLevel2 = null;
      this.showLevel3 = null;
      this.showLevel4 = null;
      this.showLevel5 = null;
      this.showLevel6 = null;
      this.showLevel7 = null;
      this.showLevel8 = null;
      this.showLevel9 = null;
    } else {
      this.showLevel1 = idx;
      this.showLevel2 = false;
      this.showLevel3 = false;
      this.showLevel4 = false;
      this.showLevel5 = false;
      this.showLevel6 = false;
      this.showLevel7 = false;
      this.showLevel8 = false;
      this.showLevel9 = false;
    }
  };

  toggleLevel2(idx) {
    if (this.isLevel2Shown(idx)) {
      this.showLevel1 = null;
      this.showLevel2 = null;
      this.showLevel3 = null;
      this.showLevel4 = null;
      this.showLevel5 = null;
      this.showLevel6 = null;
      this.showLevel7 = null;
      this.showLevel8 = null;
      this.showLevel9 = null;
    } else {
      //this.showLevel1 = idx;
      this.showLevel1 = false;
      this.showLevel2 = idx;
      this.showLevel3 = false;
      this.showLevel4 = false;
      this.showLevel5 = false;
      this.showLevel6 = false;
      this.showLevel7 = false;
      this.showLevel8 = false;
      this.showLevel9 = false;
    }
  };

  toggleLevel3(idx) {
    if (this.isLevel3Shown(idx)) {
      this.showLevel1 = null;
      this.showLevel2 = null;
      this.showLevel3 = null;
      this.showLevel4 = null;
      this.showLevel5 = null;
      this.showLevel6 = null;
      this.showLevel7 = null;
      this.showLevel8 = null;
      this.showLevel9 = null;
    } else {
      //this.showLevel1 = idx;
      this.showLevel1 = false;
      this.showLevel2 = false;
      this.showLevel3 = idx;
      this.showLevel4 = false;
      this.showLevel5 = false;
      this.showLevel6 = false;
      this.showLevel7 = false;
      this.showLevel8 = false;
      this.showLevel9 = false;
    }
  };

  toggleLevel4(idx) {
    if (this.isLevel4Shown(idx)) {
      this.showLevel1 = null;
      this.showLevel2 = null;
      this.showLevel3 = null;
      this.showLevel4 = null;
      this.showLevel5 = null;
      this.showLevel6 = null;
      this.showLevel7 = null;
      this.showLevel8 = null;
      this.showLevel9 = null;
    } else {
      //this.showLevel1 = idx;
      this.showLevel1 = false;
      this.showLevel2 = false;
      this.showLevel3 = false;
      this.showLevel4 = idx;
      this.showLevel5 = false;
      this.showLevel6 = false;
      this.showLevel7 = false;
      this.showLevel8 = false;
      this.showLevel9 = false;
    }
  };

  toggleLevel5(idx) {
    if (this.isLevel5Shown(idx)) {
      this.showLevel1 = null;
      this.showLevel2 = null;
      this.showLevel3 = null;
      this.showLevel4 = null;
      this.showLevel5 = null;
      this.showLevel6 = null;
      this.showLevel7 = null;
      this.showLevel8 = null;
      this.showLevel9 = null;
    } else {
      //this.showLevel1 = idx;
      this.showLevel1 = false;
      this.showLevel2 = false;
      this.showLevel3 = false;
      this.showLevel4 = false;
      this.showLevel5 = idx;
      this.showLevel6 = false;
      this.showLevel7 = false;
      this.showLevel8 = false;
      this.showLevel9 = false;
    }
  };

  toggleLevel6(idx) {
    if (this.isLevel6Shown(idx)) {
      this.showLevel1 = null;
      this.showLevel2 = null;
      this.showLevel3 = null;
      this.showLevel4 = null;
      this.showLevel5 = null;
      this.showLevel6 = null;
      this.showLevel7 = null;
      this.showLevel8 = null;
      this.showLevel9 = null;;
    } else {
      //this.showLevel1 = idx;
      this.showLevel1 = false;
      this.showLevel2 = false;
      this.showLevel3 = false;
      this.showLevel4 = false;
      this.showLevel5 = false;
      this.showLevel6 = idx;
      this.showLevel7 = false;
      this.showLevel8 = false;
      this.showLevel9 = false;
    }
  };

  toggleLevel7(idx) {
    if (this.isLevel7Shown(idx)) {
      this.showLevel1 = null;
      this.showLevel2 = null;
      this.showLevel3 = null;
      this.showLevel4 = null;
      this.showLevel5 = null;
      this.showLevel6 = null;
      this.showLevel7 = null;
      this.showLevel8 = null;
      this.showLevel9 = null;
    } else {
      //this.showLevel1 = idx;
      this.showLevel1 = false;
      this.showLevel2 = false;
      this.showLevel3 = false;
      this.showLevel4 = false;
      this.showLevel5 = false;
      this.showLevel6 = false;
      this.showLevel7 = idx;
      this.showLevel8 = false;
      this.showLevel9 = false;
    }
  };

  toggleLevel8(idx) {
    if (this.isLevel8Shown(idx)) {
      this.showLevel1 = null;
      this.showLevel2 = null;
      this.showLevel3 = null;
      this.showLevel4 = null;
      this.showLevel5 = null;
      this.showLevel6 = null;
      this.showLevel7 = null;
      this.showLevel8 = null;
      this.showLevel9 = null;
    } else {
      //this.showLevel1 = idx;
      this.showLevel1 = false;
      this.showLevel2 = false;
      this.showLevel3 = false;
      this.showLevel4 = false;
      this.showLevel5 = false;
      this.showLevel6 = false;
      this.showLevel7 = false;
      this.showLevel8 = idx;
      this.showLevel9 = false;
    }
  };

  toggleLevel9(idx) {
    if (this.isLevel9Shown(idx)) {
      this.showLevel1 = null;
      this.showLevel2 = null;
      this.showLevel3 = null;
      this.showLevel4 = null;
      this.showLevel5 = null;
      this.showLevel6 = null;
      this.showLevel7 = null;
      this.showLevel8 = null;
      this.showLevel9 = null;
    } else {
      //this.showLevel1 = idx;
      this.showLevel1 = false;
      this.showLevel2 = false;
      this.showLevel3 = false;
      this.showLevel4 = false;
      this.showLevel5 = false;
      this.showLevel6 = false;
      this.showLevel7 = false;
      this.showLevel8 = false;
      this.showLevel9 = idx;
    }
  };

  isLevel1Shown(idx) {
    return this.showLevel1 === idx;
  };

  isLevel2Shown(idx) {
    return this.showLevel2 === idx;
  };

  isLevel3Shown(idx) {
    return this.showLevel3 === idx;
  };

  isLevel4Shown(idx) {
    return this.showLevel4 === idx;
  };

  isLevel5Shown(idx) {
    return this.showLevel5 === idx;
  };

  isLevel6Shown(idx) {
    return this.showLevel6 === idx;
  };

  isLevel7Shown(idx) {
    return this.showLevel7 === idx;
  };

  isLevel8Shown(idx) {
    return this.showLevel8 === idx;
  };

  isLevel9Shown(idx) {
    return this.showLevel9 === idx;
  };

  keHome(){
    this.showLevel1 = false;
    this.showLevel2 = false;
    this.showLevel3 = false;
    this.showLevel4 = false;
    this.showLevel5 = false;
    this.showLevel6 = false;
    this.showLevel7 = false;
    this.showLevel8 = false;
    this.showLevel9 = false;
    this.nav.setRoot('HomePage');
    this.menu.close();
  }
  keHomePetugas(){
    this.showLevel1 = false;
    this.showLevel2 = false;
    this.showLevel3 = false;
    this.showLevel4 = false;
    this.showLevel5 = false;
    this.showLevel6 = false;
    this.showLevel7 = false;
    this.showLevel8 = false;
    this.showLevel9 = false;
    this.nav.setRoot('HomePetugasPage');
    this.menu.close();
  }
  keMasterATM(paramname){
    //this.nav.setRoot('MasteratmPage');
    this.nav.setRoot('MasteratmPage', paramname);
    this.menu.close();
  }
  keMasterUser(){
    this.nav.setRoot('MasteruserPage');
    this.menu.close();
  }
  keMasterClient(){
    this.nav.setRoot('MasterclientPage');
    this.menu.close();
  }
  keManajemenRoleMenu(){
    this.nav.setRoot('ManajemenrolemenuPage');
    this.menu.close();
  }
  keCreateTransaction(){
    this.nav.setRoot('CreateTransactionPage');
    this.menu.close();
  }
  kePendingTransaction(){
    this.nav.setRoot('PendingtransactionPage');
    this.menu.close();
  }
  keCreateService(){
    this.nav.setRoot('CreateservicePage');
    this.menu.close();
  }
  kePendingService(){
    this.nav.setRoot('PendingservicePage');
    this.menu.close();
  }
  keCreateJobOrder(){
    this.nav.setRoot('CreatejoborderPage');
    this.menu.close();
  }
  kePendingJobOrder(){
    this.nav.setRoot('PendingjoborderPage');
    this.menu.close();
  }
  keDataTransaction(){
    this.nav.setRoot('DatatransactionPage');
    this.menu.close();
  }
  keDataService(){
    this.nav.setRoot('DataservicePage');
    this.menu.close();
  }
  keDataJobOrder(){
    this.nav.setRoot('DatajoborderPage');
    this.menu.close();
  }
  keVerificationTransaction(){
    this.nav.setRoot('VerificationtransactionPage');
    this.menu.close();
  }
  keVerificationService(){
    this.nav.setRoot('VerificationservicePage');
    this.menu.close();
  }
  keVerificationJobOrder(){
    this.nav.setRoot('VerificationjoborderPage');
    this.menu.close();
  }
  keCreateTagging(){
    this.nav.setRoot('CreatetaggingPage');
    this.menu.close();
  }
  keLaporanKunjunganBulanan(){
    this.nav.setRoot('LaporankunjunganatmbulananPage');
    this.menu.close();
  }
  keLaporanKunjunganRange(){
    this.nav.setRoot('LaporankunjunganatmrangePage');
    this.menu.close();
  }

  logback(){
    this.menu.close();
    localStorage.clear();
    this.events.unsubscribe('user');
    this.nav.setRoot('LoginPage');
  }

}
