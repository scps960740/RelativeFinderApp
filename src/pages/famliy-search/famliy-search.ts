import {ViewController} from 'ionic-angular/navigation/view-controller';
import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {FamilyServeProvider} from '../../providers/family-serve/family-serve';

/**
 * Generated class for the FamliySearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({selector: 'page-famliy-search', templateUrl: 'famliy-search.html'})
export class FamliySearchPage {

    constructor(
        public navCtrl : NavController,
        public navParams : NavParams,
        public view : ViewController,
        public alertCtrl : AlertController,
        public serve : FamilyServeProvider
    ) {}

    public Result = '';
    public ResultArray;

    ionViewDidLoad() {
        console.log('ionViewDidLoad FamliySearchPage');
        this
            .view
            .setBackButtonText('返回');
    }

    //計算機按鈕事件
    ChooseBtn(text) {

        //比對哪個按鈕按下去
        switch (text) {

            case "爸爸":
                this.Result += '爸爸';
                break;
            case "媽媽":
                this.Result += '媽媽';
                break;
            case "哥哥":
                this.Result += '哥哥';
                break;
            case "弟弟":
                this.Result += '弟弟';
                break;
            case "姐姐":
                this.Result += '姐姐';
                break;
            case "妹妹":
                this.Result += '妹妹';
                break;
            case "太太":
                this.Result += '太太';
                break;
            case "丈夫":
                this.Result += '丈夫';
                break;
            case "兒子":
                this.Result += '兒子';
                break;
            case "女兒":
                this.Result += '女兒';
                break;
            case "ac":
                this.Result = '';
                break;
            case "的":
                this.Result += '的';
                break;
            case "＝":

                //用“的”來分割字串
                this.ResultArray = this
                    .Result
                    .split('的');
                console.log(this.ResultArray);

                if (this.ResultArray.length == 1) {} else if (this.ResultArray.length == 2) {

                    //判斷結果
                    if (this.ResultArray[0] == '爸爸' && this.ResultArray[1] == '爸爸') {

                        this.Result = '祖父';

                    } else if (this.ResultArray[0] == '爸爸' && this.ResultArray[1] == '媽媽') {

                        this.Result = '祖母';

                    } else if (this.ResultArray[0] == '媽媽' && this.ResultArray[1] == '爸爸') {

                        this.Result = '外祖父、外公';

                    } else if (this.ResultArray[0] == '媽媽' && this.ResultArray[1] == '媽媽') {

                        this.Result = '外祖母、外婆';

                    } else if (this.ResultArray[0] == '爸爸' && this.ResultArray[1] == '哥哥') {

                        this.Result = '伯伯';

                    } else if (this.ResultArray[0] == '爸爸' && this.ResultArray[1] == '弟弟') {

                        this.Result = '叔叔';

                    } else if (this.ResultArray[0] == '爸爸' && this.ResultArray[1] == '姐姐') {

                        this.Result = '姑姑';

                    } else if (this.ResultArray[0] == '爸爸' && this.ResultArray[1] == '妹妹') {

                        this.Result = '姑姑';

                    } else if (this.ResultArray[0] == '媽媽' && this.ResultArray[1] == '哥哥') {

                        this.Result = '舅舅';

                    } else if (this.ResultArray[0] == '媽媽' && this.ResultArray[1] == '弟弟') {

                        this.Result = '舅舅';

                    } else if (this.ResultArray[0] == '媽媽' && this.ResultArray[1] == '姐姐') {

                        this.Result = '阿姨';

                    } else if (this.ResultArray[0] == '媽媽' && this.ResultArray[1] == '妹妹') {

                        this.Result = '阿姨';

                    } else if (this.ResultArray[0] == '哥哥' && this.ResultArray[1] == '兒子') {

                        this.Result = '姪子';

                    } else if (this.ResultArray[0] == '弟弟' && this.ResultArray[1] == '兒子') {

                        this.Result = '姪子';

                    } else if (this.ResultArray[0] == '哥哥' && this.ResultArray[1] == '女兒') {

                        this.Result = '姪女';

                    } else if (this.ResultArray[0] == '弟弟' && this.ResultArray[1] == '女兒') {

                        this.Result = '姪女';

                    } else if (this.ResultArray[0] == '姐姐' && this.ResultArray[1] == '女兒') {

                        this.Result = '外甥女';

                    } else if (this.ResultArray[0] == '妹妹' && this.ResultArray[1] == '女兒') {

                        this.Result = '外甥女';

                    } else if (this.ResultArray[0] == '姐姐' && this.ResultArray[1] == '兒子') {

                        this.Result = '外甥';

                    } else if (this.ResultArray[0] == '妹妹' && this.ResultArray[1] == '兒子') {

                        this.Result = '外甥';

                    } else if (this.ResultArray[0] == '哥哥' && this.ResultArray[1] == '太太') {

                        this.Result = '嫂嫂';

                    } else if (this.ResultArray[0] == '弟弟' && this.ResultArray[1] == '太太') {

                        this.Result = '弟媳';

                    } else if (this.ResultArray[0] == '姐姐' && this.ResultArray[1] == '丈夫') {

                        this.Result = '姊夫';

                    } else if (this.ResultArray[0] == '妹妹' && this.ResultArray[1] == '丈夫') {

                        this.Result = '妹夫';

                    } else if (this.ResultArray[0] == '兒子' && this.ResultArray[1] == '太太') {

                        this.Result = '媳婦';

                    } else if (this.ResultArray[0] == '女兒' && this.ResultArray[1] == '丈夫') {

                        this.Result = '女婿';

                    } else if (this.ResultArray[0] == '兒子' && this.ResultArray[1] == '兒子') {

                        this.Result = '內孫';

                    } else if (this.ResultArray[0] == '女兒' && this.ResultArray[1] == '兒子') {

                        this.Result = '外孫';

                    } else if (this.ResultArray[0] == '兒子' && this.ResultArray[1] == '女兒') {

                        this.Result = '內孫女';

                    } else if (this.ResultArray[0] == '女兒' && this.ResultArray[1] == '女兒') {

                        this.Result = '孫女';

                    } else {

                        //this.Result = '無此結果';
                        this
                            .serve
                            .showAlert('提醒', '無此結果唷～', '確定', () => {

                                this.Result = '';

                            }, false);

                    }

                } else if (this.ResultArray.length == 3) {

                    if (this.ResultArray[0] == '爸爸' && this.ResultArray[1] == '哥哥' && this.ResultArray[2] == '太太') {

                        this.Result = '伯母';

                    } else if (this.ResultArray[0] == '爸爸' && this.ResultArray[1] == '弟弟' && this.ResultArray[2] == '太太') {

                        this.Result = '嬸嬸';

                    } else if (this.ResultArray[0] == '爸爸' && this.ResultArray[1] == '姐姐' && this.ResultArray[2] == '丈夫') {

                        this.Result = '姑丈';

                    } else if (this.ResultArray[0] == '爸爸' && this.ResultArray[1] == '妹妹' && this.ResultArray[2] == '丈夫') {

                        this.Result = '姑丈';

                    } else if (this.ResultArray[0] == '媽媽' && this.ResultArray[1] == '哥哥' && this.ResultArray[2] == '太太') {

                        this.Result = '舅媽';

                    } else if (this.ResultArray[0] == '媽媽' && this.ResultArray[1] == '妹妹' && this.ResultArray[2] == '丈夫') {

                        this.Result = '舅媽';

                    } else if (this.ResultArray[0] == '爸爸' && this.ResultArray[1] == '哥哥' && this.ResultArray[2] == '兒子') {

                        this.Result = '堂哥/堂弟';

                    } else if (this.ResultArray[0] == '爸爸' && this.ResultArray[1] == '弟弟' && this.ResultArray[2] == '兒子') {

                        this.Result = '堂哥/堂弟';

                    } else if (this.ResultArray[0] == '爸爸' && this.ResultArray[1] == '哥哥' && this.ResultArray[2] == '女兒') {

                        this.Result = '堂姊/堂妹';

                    } else if (this.ResultArray[0] == '爸爸' && this.ResultArray[1] == '弟弟' && this.ResultArray[2] == '女兒') {

                        this.Result = '堂姊/堂妹';

                    } else if (this.ResultArray[0] == '爸爸' && this.ResultArray[1] == '姐姐' && this.ResultArray[2] == '兒子') {

                        this.Result = '表哥/表弟';

                    } else if (this.ResultArray[0] == '爸爸' && this.ResultArray[1] == '妹妹' && this.ResultArray[2] == '兒子') {

                        this.Result = '表哥/表弟';

                    } else if (this.ResultArray[0] == '媽媽' && this.ResultArray[1] == '哥哥' && this.ResultArray[2] == '兒子') {

                        this.Result = '表哥/表弟';

                    } else if (this.ResultArray[0] == '媽媽' && this.ResultArray[1] == '弟弟' && this.ResultArray[2] == '兒子') {

                        this.Result = '表哥/表弟';

                    } else if (this.ResultArray[0] == '媽媽' && this.ResultArray[1] == '姐姐' && this.ResultArray[2] == '兒子') {

                        this.Result = '表哥/表弟';

                    } else if (this.ResultArray[0] == '媽媽' && this.ResultArray[1] == '妹妹' && this.ResultArray[2] == '兒子') {

                        this.Result = '表哥/表弟';

                    } else if (this.ResultArray[0] == '爸爸' && this.ResultArray[1] == '姐姐' && this.ResultArray[2] == '女兒') {

                        this.Result = '表姊/表妹';

                    } else if (this.ResultArray[0] == '爸爸' && this.ResultArray[1] == '妹妹' && this.ResultArray[2] == '女兒') {

                        this.Result = '表姊/表妹';

                    } else if (this.ResultArray[0] == '媽媽' && this.ResultArray[1] == '哥哥' && this.ResultArray[2] == '女兒') {

                        this.Result = '表姊/表妹';

                    } else if (this.ResultArray[0] == '媽媽' && this.ResultArray[1] == '弟弟' && this.ResultArray[2] == '女兒') {

                        this.Result = '表姊/表妹';

                    } else if (this.ResultArray[0] == '媽媽' && this.ResultArray[1] == '姐姐' && this.ResultArray[2] == '女兒') {

                        this.Result = '表姊/表妹';

                    } else if (this.ResultArray[0] == '媽媽' && this.ResultArray[1] == '妹妹' && this.ResultArray[2] == '女兒') {

                        this.Result = '表姊/表妹';

                    } else {

                        //this.Result = '無此結果';
                        this
                            .serve
                            .showAlert('提醒', '無此結果唷～', '確定', () => {

                                this.Result = '';

                            }, false);

                    }

                } else if (this.ResultArray.length > 3) {

                    //this.Result = '無此結果';
                    this
                        .serve
                        .showAlert('提醒', '已經算是遠親囉～', '確定', () => {

                            this.Result = '';

                        }, false);

                }
                break;

        }

    }

}
