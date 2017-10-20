import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ChartsModule } from 'ng2-charts';

import { MyApp } from './app.component';
import { Geolocation } from '@ionic-native/geolocation';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';

import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { FileTransferObject,FileTransfer,FileUploadOptions } from '@ionic-native/file-transfer';


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,HttpModule,HttpClientModule,
    IonicModule.forRoot(MyApp),ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    File,
    FileTransferObject,
    FileTransfer,
    Transfer,
    Camera,
    Geolocation,
    FilePath
  ]
})
export class AppModule {}
