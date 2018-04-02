import { GroupPage } from './../pages/group/group';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { IndexPage } from '../pages/index/index';
import { ExamModalPage } from '../pages/exam-modal/exam-modal';
import { ExamPage } from '../pages/exam/exam';
import { TreePage } from '../pages/tree/tree';
import { ResultModalPage } from '../pages/result-modal/result-modal';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage:any = IndexPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
