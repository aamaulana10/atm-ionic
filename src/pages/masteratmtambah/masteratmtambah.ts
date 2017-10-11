import { RestProvider } from './../../providers/rest/rest';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import {
    ActionSheetController,
    IonicPage,
    Loading,
    LoadingController,
    NavController,
    NavParams,
    Platform,
    ToastController,
} from 'ionic-angular';
import { File } from '@ionic-native/file';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { Http } from '@angular/http';

declare var cordova: any;
declare var google;

/**
 * Generated class for the MasteratmtambahPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-masteratmtambah',
  templateUrl: 'masteratmtambah.html',
})
export class MasteratmtambahPage {
  lat: any;
  lng: any;
  alt: any;

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  //isMap: boolean = true;

  public URL_attachment: any = "http://192.168.0.113/atm/view/upload_attachment.php";
  public responTambah: any;
  dataobject: any;
  rowdata: any;
  public responGambar: any;
  user: any;
  TiketNo: any ;

  lastImage: string = null;
  loading: Loading;

  tambahAtm = {"action":"add_masteratm",
                "basekey":"aXRvdCBhbmRpIGFuY2hhIGFzaW4gdG9tbyBtdWRhaDJhbiBraXRhIHRlcnVzIGJlcnNhbWEgbWVtYmFuZ3VuIG1lbnVqdSByYWhtYXQgYWxsYWg=",
                "userlogin":"",
                "data":
                {"atmID":"","atmName":"","atmType":"",
                "atmProvinsi":"","atmLokasi":"",
                "atmAddress":"","atmKota":"",
                "ftlatitude":"",
                "ftlongitude":""}};

  TambahGambar = {"action":"Add_TiketAttach",
                "data":
                {"TiketNo":"",
                "TiketLinkAttach":"",
                "AttachDisplayName":""},
                "basekey":"aXRvdCBhbmRpIGFuY2hhIGFzaW4gdG9tbyBtdWRhaDJhbiBraXRhIHRlcnVzIGJlcnNhbWEgbWVtYmFuZ3VuIG1lbnVqdSByYWhtYXQgYWxsYWg=",
                "userlogin":""};


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public restProvider : RestProvider,
               public toastCtrl : ToastController,
               private camera: Camera,
               private transfer: FileTransfer,
               private file: File,
               public http : Http,
               private filePath: FilePath,
               public actionSheetCtrl: ActionSheetController,
               public platform: Platform,
               public geolocation: Geolocation,
               public loadingCtrl: LoadingController) {

                localStorage.getItem('userData');

                const data = JSON.parse(localStorage.getItem('userData'));
                this.user = data;

                this.TiketNo = this.user.UserPegawaiID;
                this.TambahGambar.userlogin = this.user.UserPegawaiID;

                this.loadMap();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MasteratmtambahPage');

    this.loadMap();
  }

  tambahMasterATM(){
    this.restProvider.addMasterATM(this.tambahAtm)
    .then(data => {
      this.responTambah = data['messege'];
      console.log(this.responTambah);

      if(this.responTambah === "Success Action")
      {
         this.uploadImage(this.responTambah);
         //this.hideForm  =  true;
         this.sendNotification('Data berhasil disimpan .silahkan kembali untuk melihat perubahan');
        //this.navCtrl.push(AboutPage);
        this.navCtrl.popToRoot();

      }
      else
      {
         this.sendNotification('Something went wrong!');
      }
      // this.uploadImage(this.responTambah);
    });
  }

  postData(){
    if(this.tambahAtm.data['atmID']==="")
    {this.sendNotification('Masukkan ID Atm');}
 else if(this.tambahAtm.data['atmName']==="")
    {this.sendNotification('Pilih Nama ATM');}
 else if(this.tambahAtm.data['atmType']==="")
    {this.sendNotification('Pilih tipe ATM');}
 else if(this.tambahAtm.data['atmProvinsi']==="")
    {this.sendNotification('Pilih Provinsi');}
    else if(this.tambahAtm.data['atmKota']==="")
    {this.sendNotification('Pilih Kota');}
    else if(this.tambahAtm.data['atmLokasi']==="")
    {this.sendNotification('Masukkan lokasi');}
    else if(this.tambahAtm.data['atmAddress']==="")
    {this.sendNotification('Masukkan alamat');}
    else if(this.tambahAtm.data['ftlatitude']==="")
    {this.sendNotification('aktifkan lokasi');}
    else if(this.tambahAtm.data['ftlongitude']==="")
    {this.sendNotification('aktifkan lokasi');}
 else{
     //this.uploadImage();
     this.tambahMasterATM();
     this.sendNotification("ATM berhasil ditambah");
     this.navCtrl.setRoot('MasteratmPage');
    }
  }

  public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }


public takePicture(sourceType) {
  // Create options for the Camera Dialog
  var options = {
    quality: 100,
    sourceType: sourceType,
    saveToPhotoAlbum: false,
    correctOrientation: true
  };

  // Get the data of an image
  this.camera.getPicture(options).then((imagePath) => {
    // Special handling for Android library
    if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
      this.filePath.resolveNativePath(imagePath)
        .then(filePath => {
          let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
          let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
          this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
        });
    } else {
      var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
      var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
      this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
    }
  }, (err) => {
    this.presentToast('Error while selecting image.');
  });
}

// Create a new name for the image
private createFileName() {
  var d = new Date(),
  n = d.getTime(),
  newFileName =  n + ".jpg";
  return newFileName;
}

// Copy the image to a local folder
private copyFileToLocalDir(namePath, currentName, newFileName) {
  this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
    this.lastImage = newFileName;
  }, error => {
    this.presentToast('Error while storing file.');
  });
}


// Always get the accurate path to your apps folder
public pathForImage(img) {
  if (img === null) {
    return '';
  } else {
    return cordova.file.dataDirectory + img;
  }
}

public uploadImage(TiketNo) {

  var url = this.URL_attachment;
  var targetPath = this.pathForImage(this.lastImage);


 if(this.lastImage){
      // File name only
      var filename = this.lastImage;
      var newstr=filename.toString().replace(".jpg","");

      //menginput data untuk dilempar ke addtiketattach
      this.TambahGambar.data['TiketNo']=TiketNo;
      this.TambahGambar.data['AttachDisplayName']=filename;
      this.TambahGambar.data['TiketLinkAttach']=newstr+"_"+TiketNo+"_"+filename;

      //upload data image to database
      this.restProvider.addMasterATMAttach(this.TambahGambar)
        .then(data => {
            this.responGambar = data;
            console.log(this.responGambar);
        });

      var options = {
        fileKey: "file",
        fileName: newstr+"-"+TiketNo+".jpg",
        chunkedMode: false,
        mimeType: "multipart/form-data",
        params : {'fileName': filename}
      };


      const fileTransfer: FileTransferObject = this.transfer.create();

      this.loading = this.loadingCtrl.create({
        content: 'Uploading...',
      });
      this.loading.present();

      fileTransfer.upload(targetPath, url, options).then(data => {
        this.loading.dismissAll()
        //this.presentToast('Image succesful uploaded.');
      }, err => {
        this.loading.dismissAll()
        this.presentToast('Error while uploading file.');
      });
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

  loadMap(){
    this.geolocation.getCurrentPosition().then((position) => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      this.alt = position.coords.altitude;

      // this.tambahAtm.data.ftlatitude = this.lat;
      // this.tambahAtm.data.ftlongitude = this.lng;
      console.log(this.lat);
      console.log(this.lng);
      console.log(this.alt);

           let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude,
                                              position.coords.altitude);

           let mapOptions = {
             center: latLng,
             zoom: 15,
             mapTypeId: google.maps.MapTypeId.ROADMAP
           }

           this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
           this.addMarker();
         }, (err) => {
           console.log(err);
         });


       }

       addMarker(){

         let marker = new google.maps.Marker({
           map: this.map,
           animation: google.maps.Animation.DROP,
           position: this.map.getCenter()
         });

         let content = "<h4>you are here !</h4>";

         this.addInfoWindow(marker, content);
         console.log(this.map);

       }

       addInfoWindow(marker, content){

         let infoWindow = new google.maps.InfoWindow({
           content: content
         });

         google.maps.event.addListener(marker, 'click', () => {
           infoWindow.open(this.map, marker);
         });

       }

       generateMap(){
         //this.loadMap();
         this.tambahAtm.data.ftlatitude = this.lat;
         this.tambahAtm.data.ftlongitude = this.lng;
       }

}
