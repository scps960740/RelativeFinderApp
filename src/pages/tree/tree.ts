import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, LoadingController, AlertController } from 'ionic-angular';
import { FamilyServeProvider } from '../../providers/family-serve/family-serve';

/**
 * Generated class for the TreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 declare var $ : any;

@IonicPage()
@Component({
  selector: 'page-tree',
  templateUrl: 'tree.html',
})
export class TreePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public serve : FamilyServeProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TreePage');
  }


  SearchTreeText(tree){

    let loading = this.loadingCtrl.create({
      content: "載入中",
    });

    $.post('http://13.230.19.21/test/Famliy.php', {

            Action: 'SearchTree',
            User : localStorage.getItem('User'),
            Tree : tree,

        }, (data) => {
            var obj = $.parseJSON(data);
            console.log(obj);
            this.serve.showAlert('內容',obj.Content,'確定',null,false);
            loading.dismiss();

        })
        .fail((err) => {

        });

  }

  CallAddOrEditApi(tree,content){

    let loading = this.loadingCtrl.create({
      content: "載入中",
    });

    $.post('http://13.230.19.21/test/Famliy.php', {

            Action: 'CallTree',
            User : localStorage.getItem('User'),
            Tree : tree,
            Content : content

        }, (data) => {
            var obj = $.parseJSON(data);
            console.log(obj);

            
            loading.dismiss();

        })
        .fail((err) => {

        });

  }

  ShowEditAddWindow(tree){

    let loading = this.loadingCtrl.create({
      content: "載入中",
    });

    $.post('http://13.230.19.21/test/Famliy.php', {

            Action: 'SearchTree',
            User : localStorage.getItem('User'),
            Tree : tree,

        }, (data) => {
            var obj = $.parseJSON(data);

            let prompt = this.alertCtrl.create({
              title: '提醒',
              message: "請輸入您要新增或修改的內容",
              inputs: [
                {
                  name: 'content',
                  value : obj.Content
                },
              ],
              buttons: [
                {
                  text: '取消',
                  handler: data => {
                    
                  }
                },
                {
                  text: '儲存',
                  handler: data => {
        
                    this.CallAddOrEditApi(tree,data.content);
                    
                  }
                }
              ]
            });
            prompt.present();
            console.log(obj);
            loading.dismiss();

        })
        .fail((err) => {

        });

   

  }

  ShowWindow(ShowTree,EditTree){

    let actionSheet = this.actionSheetCtrl.create({
      title: '請選擇要執行的項目',
      buttons: [
        {
          text: '顯示內容',
          handler: () => {

            this.SearchTreeText(ShowTree);
           
          }
        },{
          text: '新增或編輯',
          handler: () => {

            this.ShowEditAddWindow(EditTree);

          }
        },{
          text: '取消',
          handler: () => {
            
          }
        }
      ]
    });

    actionSheet.present();

  }


  Show(text){

   switch (text) {

    //----------------------

    case 'tree1_1':{

      this.ShowWindow('tree1_1','tree1_1');

    } 
       break;
    case 'tree1_2':{

      this.ShowWindow('tree1_2','tree1_2');

    } 
       break;
    
    //----------------------

    case 'tree2_1':{

      this.ShowWindow('tree2_1','tree2_1');

    }  
       break;
    case 'tree2_2':{

      this.ShowWindow('tree2_2','tree2_2');

    }  
       break;
    case 'tree2_3':{

      this.ShowWindow('tree2_3','tree2_3');

    }  
       break;
    case 'tree2_4':{

      this.ShowWindow('tree2_4','tree2_4');

    }  
       break;
    case 'tree2_5':{

      this.ShowWindow('tree2_5','tree2_5');

    }  
       break;

    //----------------------

    case 'tree3_1':{

      this.ShowWindow('tree3_1','tree3_1');

    }  
       break;
    case 'tree3_2':{

      this.ShowWindow('tree3_2','tree3_2');

    }  
       break;
    case 'tree3_3':{

      this.ShowWindow('tree3_3','tree3_3');

    }  
       break;
    case 'tree3_4':{

      this.ShowWindow('tree3_4','tree3_4');

    } 
       break;
    case 'tree3_5':{

      this.ShowWindow('tree3_5','tree3_5');

    } 
       break;
    case 'tree3_6':{

      this.ShowWindow('tree3_6','tree3_6');

    } 
       break;
    case 'tree3_7':{

      this.ShowWindow('tree3_7','tree3_7');

    }  
       break;

    //----------------------
    
    case 'tree4_1':{

      this.ShowWindow('tree4_1','tree4_1');

    }  
       break;
    case 'tree4_2':{

      this.ShowWindow('tree4_2','tree4_2');

    } 
       break;
    case 'tree4_3':{

      this.ShowWindow('tree4_3','tree4_3');

    } 
       break;
    case 'tree4_4':{

      this.ShowWindow('tree4_4','tree4_4');

    } 
       break; 
       
    //----------------------

    case 'tree5_1':{

      this.ShowWindow('tree5_1','tree5_1');

    }  
       break;
    case 'tree5_2':{

      this.ShowWindow('tree5_2','tree5_2');

    } 

   }

  }

}
