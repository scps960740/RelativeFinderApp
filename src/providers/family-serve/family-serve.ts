import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the FamilyServeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FamilyServeProvider {

  constructor(
    public http: HttpClient,
    public alertCtrl: AlertController
  ) {
    console.log('Hello FamilyServeProvider Provider');
  }

  showAlert( titleS : string , msg : string , btnText : string , handler : any, enable :any) {
    
        let alert = this.alertCtrl.create({
          title: titleS,
          subTitle: msg,
          enableBackdropDismiss	: enable,
          buttons: [
            {
              text: btnText,
              role: btnText,
              handler:handler,          
            }
          ]
    
        });
        alert.present();
    
  }

}
