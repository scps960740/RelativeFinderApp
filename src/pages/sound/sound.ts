import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Media, MediaObject } from '@ionic-native/media';

/**
 * Generated class for the SoundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sound',
  templateUrl: 'sound.html',
})
export class SoundPage {

  public ChGroup = [

    {name : '丈夫'},
    {name : '奶奶'},
    {name : '弟弟'},
    {name : '叔叔'},
    {name : '妹妹'},
    {name : '老婆'},
    {name : '姊姊'},
    {name : '爸爸'},
    {name : '阿姨'},
    {name : '哥哥'},
    {name : '媽媽'},
    {name : '阿公'},

  ];

  public TwGroup = [

    {name : '伯父'},
    {name : '伯母'},
    {name : '弟弟'},
    {name : '叔公'},
    {name : '叔叔'},
    {name : '妹妹'},
    {name : '姊姊'},
    {name : '哥哥'},
    {name : '阿公'},
    {name : '阿姨'},
    {name : '阿嬤'},
    {name : '姨丈'},

  ];

  public EnGroup = [

    {name : '丈夫'},
    {name : '哥哥'},
    {name : '阿嬤'},
    {name : '叔叔'},
    {name : '老婆'},
    {name : '姊姊'},
    {name : '爸爸'},
    {name : '阿姨'},
    {name : '表堂兄弟妹'},
    {name : '媽媽'},
    {name : '阿公'},

  ];

  public ChB = true;
  public TwB = false;
  public EnB = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private media: Media
  ) {
  }

  ionViewDidLoad() {
    
  }

  LanChanged(e){

    console.log(e);

    if(e == 'Ch'){

      this.ChB = true;
      this.TwB = false;
      this.EnB = false;

    }else if(e == 'Tw'){

      this.ChB = false;
      this.TwB = true;
      this.EnB = false;

    }else if(e == 'En'){

      this.ChB = false;
      this.TwB = false;
      this.EnB = true;

    }

  }



  Start(e){

    console.log(e);

    if(this.ChB){

      switch (e) {

        case '丈夫':

        { const file: MediaObject = this.media.create('http://13.230.19.21/test/sound/Ch/Ch_Husband.aac');
        file.play(); }
          
          break;
        case '奶奶':

        { const file: MediaObject = this.media.create('http://13.230.19.21/test/sound/Ch/Ch_GrandMa.aac');
        file.play(); }

          break;
        case '弟弟':

        { const file: MediaObject = this.media.create('http://13.230.19.21/test/sound/Ch/Ch_Brother_L.aac');
        file.play(); }
          
          break;
        case '叔叔':

        { const file: MediaObject = this.media.create('http://13.230.19.21/test/sound/Ch/Ch_Uncle.aac');
        file.play(); }
          
          break;
  
        case '妹妹':

        { const file: MediaObject = this.media.create('http://13.230.19.21/test/sound/Ch/Ch_Sister_L.aac');
        file.play(); }
          
          break;
        case '老婆':

        { const file: MediaObject = this.media.create('http://13.230.19.21/test/sound/Ch/Ch_Wife.aac');
        file.play(); }
          
          break;
        case '姊姊':

        { const file: MediaObject = this.media.create('http://13.230.19.21/test/sound/Ch/Ch_Sister.aac');
        file.play(); }
          
          break;
        case '爸爸':

        { const file: MediaObject = this.media.create('http://13.230.19.21/test/sound/Ch/Ch_Father.aac');
        file.play(); }
          
          break;
        case '阿姨':

        { const file: MediaObject = this.media.create('http://13.230.19.21/test/sound/Ch/Ch_Aunt.aac');
        file.play(); }
          
          break;
        case '哥哥':

        { const file: MediaObject = this.media.create('http://13.230.19.21/test/sound/Ch/Ch_Brother.aac');
        file.play(); }
          
          break;
  
        case '媽媽':

        { const file: MediaObject = this.media.create('http://13.230.19.21/test/sound/Ch/Ch_Mother.aac');
        file.play(); }
          
          break;
        case '阿公':

        { const file: MediaObject = this.media.create('http://13.230.19.21/test/sound/Ch/Ch_GrandPa.aac');
        file.play(); }
          
          break;
    
      }

    }else if(this.TwB){

      switch (e) {

        case '伯父':

        { const file: MediaObject = this.media.create('http://13.230.19.21/test/sound/Tw/Tw_Father2.aac');
        file.play(); }
          
          break;
        case '伯母':

        { const file: MediaObject = this.media.create('http://13.230.19.21/test/sound/Tw/Tw_Mother2.aac');
        file.play(); }
          
          break;
        case '弟弟':

        { const file: MediaObject = this.media.create('http://13.230.19.21/test/sound/Tw/Tw_Brother_L.aac');
        file.play(); }
          
          break;
        case '叔公':

        { const file: MediaObject = this.media.create('http://13.230.19.21/test/sound/Tw/Tw_UncleFather.aac');
        file.play(); }
          
          break;
  
        case '叔叔':

        { const file: MediaObject = this.media.create('http://13.230.19.21/test/sound/Tw/Tw_Uncle.aac');
        file.play(); }
          
          break;
        case '妹妹':

        { const file: MediaObject = this.media.create('http://13.230.19.21/test/sound/Tw/Tw_Sister_L.aac');
        file.play(); }
          
          break;
        case '姊姊':

        { const file: MediaObject = this.media.create('http://13.230.19.21/test/sound/Tw/Tw_Sister.aac');
        file.play(); }
          
          break;
        case '哥哥':

        { const file: MediaObject = this.media.create('http://13.230.19.21/test/sound/Tw/Tw_Brother.aac');
        file.play(); }
          
          break;
        case '阿公':

        { const file: MediaObject = this.media.create('http://13.230.19.21/test/sound/Tw/Tw_GrandPa.aac');
        file.play(); }
          
          break;
        case '阿姨':

        { const file: MediaObject = this.media.create('http://13.230.19.21/test/sound/Tw/Tw_Aunt.aac');
        file.play(); }
          
          break;
  
        case '阿嬤':

        { const file: MediaObject = this.media.create('http://13.230.19.21/test/sound/Tw/Tw_GrandMa.aac');
        file.play(); }
          
          break;
        case '姨丈':

        { const file: MediaObject = this.media.create('http://13.230.19.21/test/sound/Tw/Tw_AuntHusband.aac');
        file.play(); }
          
          break;
    
      }

    }else if(this.EnB){

      switch (e) {
        case '丈夫':

        { const file: MediaObject = this.media.create('http://13.230.19.21/test/sound/En/Husband.aac');
        file.play(); }
          
          break;
        case '哥哥':

        { const file: MediaObject = this.media.create('http://13.230.19.21/test/sound/En/Brother.aac');
        file.play(); }
          
          break;
        case '阿嬤':

        { const file: MediaObject = this.media.create('http://13.230.19.21/test/sound/En/GrandMa.aac');
        file.play(); }
          
          break;
        case '叔叔':

        { const file: MediaObject = this.media.create('http://13.230.19.21/test/sound/En/Uncle.aac');
        file.play(); }
          
          break;
  
        case '老婆':

        { const file: MediaObject = this.media.create('http://13.230.19.21/test/sound/En/Wife.aac');
        file.play(); }
          
          break;
        case '姊姊':

        { const file: MediaObject = this.media.create('http://13.230.19.21/test/sound/En/Sister.aac');
        file.play(); }
          
          break;
        case '爸爸':

        { const file: MediaObject = this.media.create('http://13.230.19.21/test/sound/En/Father.aac');
        file.play(); }
          
          break;
        case '阿姨':

        { const file: MediaObject = this.media.create('http://13.230.19.21/test/sound/En/Auntie.aac');
        file.play(); }
          
          break;
        case '表堂兄弟妹':

        { const file: MediaObject = this.media.create('http://13.230.19.21/test/sound/En/Cousin.aac');
        file.play(); }
          
          break;
        case '媽媽':

        { const file: MediaObject = this.media.create('http://13.230.19.21/test/sound/En/Mother.aac');
        file.play(); }
          
          break;
  
        case '阿公':

        { const file: MediaObject = this.media.create('http://13.230.19.21/test/sound/En/Grandfather.aac');
        file.play(); }
          
          break;
    
      }

    }

    
  }


}
