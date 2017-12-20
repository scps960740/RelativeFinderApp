import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController } from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {AndroidPermissions} from '@ionic-native/android-permissions';

/**
 * Generated class for the GroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 declare var $ :any;

@IonicPage()
@Component({
  selector: 'page-group',
  templateUrl: 'group.html',
})
export class GroupPage {

  public base64Image;
  public loading;
  public PersonImg;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private camera : Camera,
    public platform: Platform, 
    private androidPermissions : AndroidPermissions,
    public loadingCtrl : LoadingController,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupPage');


    $.post('http://13.230.19.21/test/Famliy.php', {

        Action: 'GetQrCode',
        User: localStorage.getItem('User') 

    }, (data) => {

        var obj = $.parseJSON(data);

        this.PersonImg = 'http://13.230.19.21/img/' + obj.qrphoto;

  

    }).fail((err)=>{
    
        
    });

    //android權限取得

        if (this.platform.is('android')) {

          this
              .androidPermissions
              .checkPermission(this.androidPermissions.PERMISSION.CAMERA)
              .then(
                  success => console.log('Permission granted'),
                  err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
              );

          this
              .androidPermissions
              .checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
              .then(
                  success => console.log('Permission granted'),
                  err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
              );

          this
              .androidPermissions
              .requestPermissions(
                  [this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE]
              );

      }


  }

  get image() {

    if (this.PersonImg != undefined) {
        return this.PersonImg;
    }

  }

  ChoosePhoto() {

    //this.IsEdit = true;

    const options: CameraOptions = {
        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        //destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        saveToPhotoAlbum: true,
        correctOrientation: true,
        sourceType: 0,
        // allowEdit:true,
        // targetHeight: 400,
        // targetWidth: 400
    }

    this
        .camera
        .getPicture(options)
        .then((imageData) => {

            this.base64Image = 'data:image/jpeg;base64,' + imageData;

            this.loading = this
                .loadingCtrl
                .create({content: '載入中'});

            this
                .loading
                .present();

            setTimeout(() => {

                this.UploadBase64()

            }, 1000);
            

         

        }, (err) => {
          
        });

}

UploadBase64(){

        $.post('http://13.230.19.21/test/Famliy.php', {

            Action: 'QrPhoto',
            Photo: this.base64Image,
            User: localStorage.getItem('User') 

        }, (data) => {

            var obj = $.parseJSON(data);

            this.PersonImg = 'http://13.230.19.21/img/' + obj.Msg;

            
            this
                .loading
                .dismiss()

        }).fail((err)=>{
        
            
        });


}

}
