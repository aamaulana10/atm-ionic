import { Chart } from 'chart.js';
import { RestProvider } from '../../providers/rest/rest';
import { Component, ViewChild } from '@angular/core';
import { AlertController, IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
 // @ViewChild('lineCanvas') lineCanvas;

  barChart: any;
  doughnutChart: any;
  lineChart: any;

  public responAtm : any;
  responAtmInfo : any;
  responAtmTagging : any;
  responAtmTask : any;
  responAtmJobOrder: any;
  dataobject :any;
  rowdata :any;
  dataobjectTagging :any;
  rowdataTagging :any;
  dataobjectTaskInfo :any;
  rowdataTaskinfo :any;
  dataobjectJobOrder :any;
  rowdataJobOrder :any;
  public cssClass: any;
  atmInfo =
  {"action":"get_DataATMInfo",
  "basekey":"aXRvdCBhbmRpIGFuY2hhIGFzaW4gdG9tbyBtdWRhaDJhbiBraXRhIHRlcnVzIGJlcnNhbWEgbWVtYmFuZ3VuIG1lbnVqdSByYWhtYXQgYWxsYWg=",
  "userlogin":""
   };

   atmTagging =
   {"action":"get_DataTaggingInfo",
   "basekey":"aXRvdCBhbmRpIGFuY2hhIGFzaW4gdG9tbyBtdWRhaDJhbiBraXRhIHRlcnVzIGJlcnNhbWEgbWVtYmFuZ3VuIG1lbnVqdSByYWhtYXQgYWxsYWg=",
   "userlogin":""
    };

    atmTaskinfo =
    {"action":"get_DataTaskInfo",
    "basekey":"aXRvdCBhbmRpIGFuY2hhIGFzaW4gdG9tbyBtdWRhaDJhbiBraXRhIHRlcnVzIGJlcnNhbWEgbWVtYmFuZ3VuIG1lbnVqdSByYWhtYXQgYWxsYWg=",
    "userlogin":""
     };

     atmJobOrder =
     {"action":"get_DataClosingJOrder",
     "basekey":"aXRvdCBhbmRpIGFuY2hhIGFzaW4gdG9tbyBtdWRhaDJhbiBraXRhIHRlcnVzIGJlcnNhbWEgbWVtYmFuZ3VuIG1lbnVqdSByYWhtYXQgYWxsYWg=",
     "userlogin":""
    };

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public restProvider : RestProvider, public alertCtrl : AlertController,
              public menu : MenuController) {
    this.menu.enable(true);
    localStorage.getItem('userData');

    //const data = JSON.parse(localStorage.getItem('userData'));
    // this.responAtm = data;
    // this.atmInfo.userlogin = this.responAtm.UserPegawaiID;
    // console.log(this.atmInfo.userlogin);

    //console.log(this.getATMInfo());
    this.getATMInfo();
    this.getATMTagging();
    this.getATMTaskInfo();
    this.getATMJobOrder();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');






            //  this.lineChart = new Chart(this.lineCanvas.nativeElement, {

            //      type: 'line',
            //      data: {
            //          labels: ["January", "February", "March", "April", "May", "June", "July"],
            //          datasets: [
            //              {
            //                  label: "My First dataset",
            //                  fill: false,
            //                  lineTension: 0.1,
            //                  backgroundColor: "rgba(75,192,192,0.4)",
            //                  borderColor: "rgba(75,192,192,1)",
            //                  borderCapStyle: 'butt',
            //                  borderDash: [],
            //                  borderDashOffset: 0.0,
            //                  borderJoinStyle: 'miter',
            //                  pointBorderColor: "rgba(75,192,192,1)",
            //                  pointBackgroundColor: "#fff",
            //                  pointBorderWidth: 1,
            //                  pointHoverRadius: 5,
            //                  pointHoverBackgroundColor: "rgba(75,192,192,1)",
            //                  pointHoverBorderColor: "rgba(220,220,220,1)",
            //                  pointHoverBorderWidth: 2,
            //                  pointRadius: 1,
            //                  pointHitRadius: 10,
            //                  data: [65, 59, 80, 81, 56, 55, 40],
            //                  spanGaps: false,
            //              }
            //          ]
            //      }

            //  });
  }

  getATMInfo(){
    this.restProvider.getDataAtm(this.atmInfo)
    .then(data => {
      this.responAtmInfo = data;
      this.dataobject = this.responAtmInfo["dataobject"];
      this.rowdata = this.dataobject[0];

      console.log(this.rowdata);
    });
  }

  masterbank(paramname){
      console.log(paramname);
      localStorage.setItem('dataAtm', paramname);
      console.log(localStorage.setItem('dataAtm', JSON.stringify(paramname)));

      this.navCtrl.push('MasteratmdetailPage', paramname);
  }

  getATMTagging(){
    this.restProvider.getDataAtm(this.atmTagging)
    .then(data => {
      this.responAtmTagging = data;
      this.dataobjectTagging = this.responAtmInfo["dataobject"];
      this.rowdataTagging = this.dataobjectTagging[0];
      console.log(this.dataobjectTagging[0]['ftbank_name'])
      this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

                         type: 'doughnut',
                         width:500,
                         data: {
                             labels: [this.dataobjectTagging[0]['ftbank_code'],
                                      this.dataobjectTagging[1]['ftbank_code'],
                                      this.dataobjectTagging[2]['ftbank_code'],
                                      this.dataobjectTagging[3]['ftbank_code'],
                                      this.dataobjectTagging[4]['ftbank_code'],
                                      this.dataobjectTagging[5]['ftbank_code']
                                    ],
                             datasets: [{
                                 label: [this.dataobjectTagging[0]['ftbank_code'],
                                 this.dataobjectTagging[1]['ftbank_code'],
                                 this.dataobjectTagging[2]['ftbank_code'],
                                 this.dataobjectTagging[3]['ftbank_code'],
                                 this.dataobjectTagging[4]['ftbank_code'],
                                 this.dataobjectTagging[5]['ftbank_code']
                               ],
                                 data:  [this.dataobjectTagging[0]['fntotal'],
                                        this.dataobjectTagging[1]['fntotal'],
                                        this.dataobjectTagging[2]['fntotal'],
                                        this.dataobjectTagging[3]['fntotal'],
                                        this.dataobjectTagging[4]['fntotal'],
                                        this.dataobjectTagging[5]['fntotal']
                                    ],
                                 backgroundColor: [
                                     '#2196F3',
                                     '#FF9800',
                                     '#FFC107',
                                     '#4CAF50',
                                     '#FFC107',
                                     '#009688'
                                 ],
                                 hoverBackgroundColor: [
                                     "#2196F3",
                                     "#FF9800",
                                     "#FFC107",
                                     "#4CAF50",
                                     "#FFC107",
                                     "#009688"
                                 ]
                             }]
                         },
                         options:{
                            cutoutPercentage: 50
                         }

                     });

      console.log(this.dataobjectTagging);
    });
  }

  getATMTaskInfo(){
    this.restProvider.getDataAtm(this.atmTaskinfo)
    .then(data => {
      this.responAtmTask = data;
      this.dataobjectTaskInfo = this.responAtmTask["dataobject"];
      this.rowdataTaskinfo = this.dataobjectTaskInfo[0];

      this.barChart = new Chart(this.barCanvas.nativeElement, {

                         type: 'bar',
                         data: {
                             labels: [this.dataobjectTagging[0]['ftbank_code'],
                             this.dataobjectTagging[1]['ftbank_code'],
                             this.dataobjectTagging[2]['ftbank_code'],
                             this.dataobjectTagging[3]['ftbank_code'],
                             this.dataobjectTagging[4]['ftbank_code'],
                             this.dataobjectTagging[5]['ftbank_code']
                           ],
                             datasets: [
                              {data: [this.dataobjectTaskInfo[0]['fntotal_tr'],
                                      this.dataobjectTaskInfo[1]['fntotal_tr'],
                                      this.dataobjectTaskInfo[2]['fntotal_tr'],
                                      this.dataobjectTaskInfo[3]['fntotal_tr'],
                                      this.dataobjectTaskInfo[4]['fntotal_tr'],
                                      this.dataobjectTaskInfo[5]['fntotal_tr']
                                    ],
                               label: 'Transaction',
                               backgroundColor:
                               '#2196F3',
                            hoverBackgroundColor:
                                "#2196F3"
                            },
                              {data: [this.dataobjectTaskInfo[0]['fntotal_sc'],
                                      this.dataobjectTaskInfo[1]['fntotal_sc'],
                                      this.dataobjectTaskInfo[2]['fntotal_sc'],
                                      this.dataobjectTaskInfo[3]['fntotal_sc'],
                                      this.dataobjectTaskInfo[4]['fntotal_sc'],
                                      this.dataobjectTaskInfo[5]['fntotal_sc']
                                    ],
                               label: 'Service',
                               backgroundColor:
                               '#FF9800',
                            hoverBackgroundColor:
                             '#FF9800'
                                },
                               {data: [this.dataobjectTaskInfo[0]['fntotal_jo'],
                                        this.dataobjectTaskInfo[1]['fntotal_jo'],
                                        this.dataobjectTaskInfo[2]['fntotal_jo'],
                                        this.dataobjectTaskInfo[3]['fntotal_jo'],
                                        this.dataobjectTaskInfo[4]['fntotal_jo'],
                                        this.dataobjectTaskInfo[5]['fntotal_jo']
                                      ],
                                label: 'Job Order',
                                backgroundColor:
                                '#FFC107',
                             hoverBackgroundColor:
                             '#FFC107'
                              }
                              ]
                         },
                         options: {
                             scales: {
                                 yAxes: [{
                                     ticks: {
                                         beginAtZero:true
                                     }
                                 }]
                             }
                         }

                     });

      console.log(this.dataobjectTaskInfo);
    });
  }

  getATMJobOrder(){
    this.restProvider.getDataAtm(this.atmJobOrder)
    .then(data => {
      this.responAtmJobOrder = data;
      this.dataobjectJobOrder = this.responAtmJobOrder["dataobject"];
      this.rowdataJobOrder = this.dataobjectJobOrder[0];

      console.log(this.dataobjectJobOrder);
    });
  }

 logout(){
   localStorage.clear();
   this.navCtrl.setRoot('LoginPage');
 }

 taggingaksi(){
  let alert = this.alertCtrl.create({
    buttons: [
      {
        text: 'Action',
        handler: () => {

        }
      },
      {
        text: 'Another Action',
        handler: () => {

        }
      }
    ]
  });
  alert.present();
 }

 taskaksi(){
  let alert = this.alertCtrl.create({
    buttons: [
      {
        text: 'Action',
        handler: () => {

        }
      },
      {
        text: 'Another Action',
        handler: () => {

        }
      }
    ]
  });
  alert.present();
 }

}
