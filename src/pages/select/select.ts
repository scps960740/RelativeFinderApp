import { TabsPage } from './../tabs/tabs';
import { ExamPage } from './../exam/exam';
import { FamliySearchPage } from './../famliy-search/famliy-search';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the SelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select',
  templateUrl: 'select.html',
})
export class SelectPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public view : ViewController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectPage');
    this.view.setBackButtonText('返回');
  }

  GoSearch(){
    this.navCtrl.push(FamliySearchPage,null);
  }

  GoExam(){

    this.navCtrl.push(ExamPage,null);

  }

  GoMyFamliy(){
    this.navCtrl.push(TabsPage,null);
  }

}
