import { ViewController } from 'ionic-angular/navigation/view-controller';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FamilyServeProvider } from '../../providers/family-serve/family-serve';

/**
 * Generated class for the ExamModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exam-modal',
  templateUrl: 'exam-modal.html',
})
export class ExamModalPage {

  public SimpleM = false;
  public SimpleG = false;
  public DifficultyM = false;
  public DifficultyG = false;

  public data ;

  public Anwser1 = '';
  public Anwser2 = '';
  public Anwser3 = '';
  public Anwser4 = '';
  public Anwser5 = '';
  public Anwser6 = '';
  public Anwser7 = '';
  public Anwser8 = '';
  public Anwser9 = '';
  public Anwser10 = '';

  public DAnwser1 = '';
  public DAnwser2 = '';
  public DAnwser3 = '';
  public DAnwser4 = '';
  public DAnwser5 = '';
  public DAnwser6 = '';
  public DAnwser7 = '';
  public DAnwser8 = '';
  public DAnwser9 = '';
  public DAnwser10 = '';

  public Result = 0 ;
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public serve : FamilyServeProvider,
    public view : ViewController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamModalPage');

    this.data = this.navParams.get('data');

    if(this.data.Gender == 'M'){

      //男生

      if(this.data.Difficulty == 'L1'){

        //簡單

        this.SimpleM = true;
        this.SimpleG = false;
        this.DifficultyM = false;
        this.DifficultyG = false;


      }else if(this.data.Difficulty == 'L2'){

        //進階

        this.SimpleM = false;
        this.SimpleG = false;
        this.DifficultyM = true;
        this.DifficultyG = false;


      }

    }else if(this.data.Gender == 'G'){

      //女生

      if(this.data.Difficulty == 'L1'){

        //簡單

        this.SimpleM = false;
        this.SimpleG = true;
        this.DifficultyM = false;
        this.DifficultyG = false;


      }else if(this.data.Difficulty == 'L2'){

        //進階

        this.SimpleM = false;
        this.SimpleG = false;
        this.DifficultyM = false;
        this.DifficultyG = true;

        
      }

    }

  }

  GetResult(){

    if(this.data.Gender == 'M'){

      //男生

      if(this.data.Difficulty == 'L1'){

        //簡單

        if(this.Anwser1 == '' || this.Anwser2 == '' || this.Anwser3 == '' ||  this.Anwser4 == '' || this.Anwser5 == '' || this.Anwser6 == '' || this.Anwser7 == '' || this.Anwser8 == '' || this.Anwser9 == '' || this.Anwser10 == ''){

          this.serve.showAlert('提醒','您還有題目空著喲！','確定',null,false);

        }else{

          if(this.Anwser1 == 'A'){

            this.Result += 10;

          }
          if(this.Anwser2 == 'B'){

            this.Result += 10;
            
          }
          if(this.Anwser3 == 'C'){

            this.Result += 10;
            
          }
          if(this.Anwser4 == 'B'){

            this.Result += 10;
            
          }
          if(this.Anwser5 == 'B'){

            this.Result += 10;
            
          }
          if(this.Anwser6 == 'A'){

            this.Result += 10;
            
          }
          if(this.Anwser7 == 'A'){

            this.Result += 10;
            
          }
          if(this.Anwser8 == 'A'){

            this.Result += 10;
            
          }
          if(this.Anwser9 == 'D'){

            this.Result += 10;
            
          }
          if(this.Anwser10 == 'C'){

            this.Result += 10;
            
          }

          this.serve.showAlert('分數','您的分數為' + this.Result,'確定',()=>{

            this.Result = 0;

          },false);

        }


      }else if(this.data.Difficulty == 'L2'){

        //進階

        if(this.DAnwser1 == '' || this.DAnwser2 == '' || this.DAnwser3 == '' ||  this.DAnwser4 == '' || this.DAnwser5 == '' || this.DAnwser6 == '' || this.DAnwser7 == '' || this.DAnwser8 == '' || this.DAnwser9 == '' || this.DAnwser10 == ''){

          this.serve.showAlert('提醒','您還有題目空著喲！','確定',null,false);

        }else{

          if(this.DAnwser1 == 'A'){

            this.Result += 10;

          }
          if(this.DAnwser2 == 'B'){

            this.Result += 10;
            
          }
          if(this.DAnwser3 == 'D'){

            this.Result += 10;
            
          }
          if(this.DAnwser4 == 'C'){

            this.Result += 10;
            
          }
          if(this.DAnwser5 == 'B'){

            this.Result += 10;
            
          }
          if(this.DAnwser6 == 'B'){

            this.Result += 10;
            
          }
          if(this.DAnwser7 == 'D'){

            this.Result += 10;
            
          }
          if(this.DAnwser8 == 'A'){

            this.Result += 10;
            
          }
          if(this.DAnwser9 == 'A'){

            this.Result += 10;
            
          }
          if(this.DAnwser10 == 'D'){

            this.Result += 10;
            
          }

          this.serve.showAlert('分數','您的分數為' + this.Result,'確定',()=>{

            this.Result = 0;

          },false);

        }



      }

    }else if(this.data.Gender == 'G'){

      //女生

      if(this.data.Difficulty == 'L1'){

        //簡單

        if(this.Anwser1 == '' || this.Anwser2 == '' || this.Anwser3 == '' ||  this.Anwser4 == '' || this.Anwser5 == '' || this.Anwser6 == '' || this.Anwser7 == '' || this.Anwser8 == '' || this.Anwser9 == '' || this.Anwser10 == ''){

          this.serve.showAlert('提醒','您還有題目空著喲！','確定',null,false);

        }else{

          if(this.Anwser1 == 'A'){

            this.Result += 10;

          }
          if(this.Anwser2 == 'B'){

            this.Result += 10;
            
          }
          if(this.Anwser3 == 'C'){

            this.Result += 10;
            
          }
          if(this.Anwser4 == 'B'){

            this.Result += 10;
            
          }
          if(this.Anwser5 == 'B'){

            this.Result += 10;
            
          }
          if(this.Anwser6 == 'A'){

            this.Result += 10;
            
          }
          if(this.Anwser7 == 'C'){

            this.Result += 10;
            
          }
          if(this.Anwser8 == 'B'){

            this.Result += 10;
            
          }
          if(this.Anwser9 == 'D'){

            this.Result += 10;
            
          }
          if(this.Anwser10 == 'C'){

            this.Result += 10;
            
          }

          this.serve.showAlert('分數','您的分數為' + this.Result,'確定',()=>{

            this.Result = 0;

          },false);
          

        }

      
      }else if(this.data.Difficulty == 'L2'){

        //進階

        if(this.DAnwser1 == '' || this.DAnwser2 == '' || this.DAnwser3 == '' ||  this.DAnwser4 == '' || this.DAnwser5 == '' || this.DAnwser6 == '' || this.DAnwser7 == '' || this.DAnwser8 == '' || this.DAnwser9 == '' || this.DAnwser10 == ''){

          this.serve.showAlert('提醒','您還有題目空著喲！','確定',null,false);

        }else{

          if(this.DAnwser1 == 'B'){

            this.Result += 10;

          }
          if(this.DAnwser2 == 'D'){

            this.Result += 10;
            
          }
          if(this.DAnwser3 == 'A'){

            this.Result += 10;
            
          }
          if(this.DAnwser4 == 'A'){

            this.Result += 10;
            
          }
          if(this.DAnwser5 == 'D'){

            this.Result += 10;
            
          }
          if(this.DAnwser6 == 'B'){

            this.Result += 10;
            
          }
          if(this.DAnwser7 == 'C'){

            this.Result += 10;
            
          }
          if(this.DAnwser8 == 'B'){

            this.Result += 10;
            
          }
          if(this.DAnwser9 == 'A'){

            this.Result += 10;
            
          }
          if(this.DAnwser10 == 'C'){

            this.Result += 10;
            
          }

          this.serve.showAlert('分數','您的分數為' + this.Result,'確定',()=>{

            this.Result = 0;

          },false);
          

        }


        
      }

    }

    

  }

  Close(){

    this.view.dismiss();
    
  }



}
