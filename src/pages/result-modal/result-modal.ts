import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ResultModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result-modal',
  templateUrl: 'result-modal.html',
})
export class ResultModalPage {

  public data;
  public text;

  public Show1 = false;
  public Show2 = false;
  public Show3 = false;
  public Show4 = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public view : ViewController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultModalPage');

    this.data = this.navParams.get('data');
    this.text = this.data.id;
    console.log(this.text);
    
    if(this.text == '1'){

      this.Show1 = true;
      this.Show2 = false;
      this.Show3 = false;
      this.Show4 = false;

    }else if(this.text == '2'){

      this.Show1 = false;
      this.Show2 = true;
      this.Show3 = false;
      this.Show4 = false;

    }else if(this.text == '3'){

      this.Show1 = false;
      this.Show2 = false;
      this.Show3 = true;
      this.Show4 = false;

    }else if(this.text == '4'){

      this.Show1 = false;
      this.Show2 = false;
      this.Show3 = false;
      this.Show4 = true;

    }
  }

  Close(){

    this.view.dismiss();

  }

}
