import { SelectPage } from './../select/select';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FamilyServeProvider } from '../../providers/family-serve/family-serve';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 declare var $ : any;

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public view : ViewController,
    public serve : FamilyServeProvider,
    public loadingCtrl: LoadingController
  ) 
  {}

  public Email = "";
  public Password = "";

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectPage');
    this.view.setBackButtonText('返回');
  }

  Login(){

    //登入前判斷輸入欄位有沒有空著
    if(this.Email == "" || this.Password == ""){

      this.serve.showAlert('提醒','請輸入帳號或密碼','確定',null,false);

    }else{

      //email的輸入規則
      var emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

      //判斷輸入的帳號，符不符合email的格式 （判斷是否等於-1)
      if(this.Email.search(emailRule)!= -1){

        //顯示轉圈圈
        let loading = this.loadingCtrl.create({
          content: "登入中",
        });
        loading.present();

        //用post的通關密語告訴serve我要登入囉～
        $.post('http://13.230.19.21/test/Famliy.php', {

            Action: 'Login',
            User : this.Email,
            PassWord : this.Password 

        }, (data) => {
            //處理接回來的值
            var obj = $.parseJSON(data);
            console.log(obj);

            this.serve.showAlert('提醒',obj.Status,'確定',null,false);

                if(obj.Status == '登入成功'){
                  //在本地（ＡＰＰ本身）塞入一個永久存在的值
                  localStorage.setItem('User',this.Email);
                  this.navCtrl.push(SelectPage,null);
                }

            //關掉轉圈圈
            loading.dismiss();

        })
        .fail((err) => {

        });

        
      }else{

        this.serve.showAlert('提醒','Email格式不正確','確定',null,false);
          
      }​

    }

   
    

  }

  Regist(){

    if(this.Email == "" || this.Password == ""){
      
            this.serve.showAlert('提醒','請輸入帳號或密碼','確定',null,false);
      
          }else{
      
            var emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
      
            if(this.Email.search(emailRule)!= -1){
      
              let loading = this.loadingCtrl.create({
                content: "註冊中",
              });
            
              loading.present();
      
              $.post('http://13.230.19.21/test/Famliy.php', {
      
                  Action: 'SignUp',
                  User : this.Email,
                  PassWord : this.Password 
      
              }, (data) => {
                  var obj = $.parseJSON(data);
                  console.log(obj);
      
                  this.serve.showAlert('提醒',obj.Status,'確定',null,false);

                  if(obj.Status == '註冊成功'){
                    localStorage.setItem('User',this.Email);
                  }
      
                  loading.dismiss();
      
              })
              .fail((err) => {
      
              });
      
              
            }else{
      
              this.serve.showAlert('提醒','Email格式不正確','確定',null,false);
                
            }​
      
          }

  }

}
