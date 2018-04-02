import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IndexPage } from '../pages/index/index';
import { SelectPage } from '../pages/select/select';
import { FamliySearchPage } from '../pages/famliy-search/famliy-search';
import { FamilyServeProvider } from '../providers/family-serve/family-serve';
import { HttpClientModule } from '@angular/common/http';
import { ExamPage } from '../pages/exam/exam';
import { ExamModalPage } from '../pages/exam-modal/exam-modal';
import { LoginPage } from '../pages/login/login';
import { TreePage } from '../pages/tree/tree';
import { GroupPage } from '../pages/group/group';
import { SoundPage } from '../pages/sound/sound';
import { Media, MediaObject } from '@ionic-native/media';
import {Camera} from '@ionic-native/camera';
import {AndroidPermissions} from '@ionic-native/android-permissions';
import { ResultModalPage } from '../pages/result-modal/result-modal';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IndexPage,
    SelectPage,
    FamliySearchPage,
    ExamPage,
    ExamModalPage,
    LoginPage,
    TreePage,
    GroupPage,
    SoundPage,
    ResultModalPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IndexPage,
    SelectPage,
    FamliySearchPage,
    ExamPage,
    ExamModalPage,
    LoginPage,
    TreePage,
    GroupPage,
    SoundPage,
    ResultModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FamilyServeProvider,
    Media,
    Camera,
    AndroidPermissions
  ]
})
export class AppModule {}
