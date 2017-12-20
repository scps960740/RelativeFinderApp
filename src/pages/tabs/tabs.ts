import { TreePage } from './../tree/tree';
import { GroupPage } from './../group/group';
import { SoundPage } from './../sound/sound';
import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SoundPage;
  tab2Root = GroupPage;
  tab3Root = TreePage;

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectPage');
    this.view.setBackButtonText('返回');
  }

  constructor(

    public view : ViewController

  ) {
    

  }
}
