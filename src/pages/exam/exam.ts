import { FamilyServeProvider } from './../../providers/family-serve/family-serve';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { ExamModalPage } from '../exam-modal/exam-modal';

/**
 * Generated class for the ExamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exam',
  templateUrl: 'exam.html',
})
export class ExamPage {

  public Gender = '';
  public Difficulty = '';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public serve : FamilyServeProvider,
    public modal : ModalController,
    public view : ViewController,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamPage');
    this.view.setBackButtonText('返回');
  }


  StartTest(){

    console.log(this.Gender);

    if(this.Gender == '' || this.Difficulty == ''){

      this.serve.showAlert('提醒','您尚未選擇性別或難度！','確定',null,false);

    }else{

      const myData = {
        Gender : this.Gender,
        Difficulty : this.Difficulty
      }

      const ExamModal =  this.modal.create(ExamModalPage,{data:myData});
      ExamModal.present();

    }

  }

}
