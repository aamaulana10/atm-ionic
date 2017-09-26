import { RestProvider } from '../providers/rest/rest';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'LoginPage';

  public userDetails : any;
  // userId : any;
  // userEmail : any;

  userLogin = {
    "userId": "",
    "userEmail": "",

  };

  //pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
     public statusBar: StatusBar,
     public splashScreen: SplashScreen,
     public restProvider: RestProvider) {

      const data = JSON.parse(localStorage.getItem('userData'));

      if(this.userDetails = data){
        console.log(this.userDetails);

        this.userLogin.userId = this.userDetails.UserPegawaiNamaLengkap;
        this.userLogin.userEmail = this.userDetails.UserPegawaiEmail;
      }else {
        this.userLogin.userId = "RAKSYST";
        this.userLogin.userEmail = "ananta kriya";
      }


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
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }


}
