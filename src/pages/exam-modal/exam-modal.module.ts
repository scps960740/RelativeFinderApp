import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExamModalPage } from './exam-modal';

@NgModule({
  declarations: [
    ExamModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ExamModalPage),
  ],
})
export class ExamModalPageModule {}
