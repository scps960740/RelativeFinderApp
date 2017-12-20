import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FamliySearchPage } from './famliy-search';

@NgModule({
  declarations: [
    FamliySearchPage,
  ],
  imports: [
    IonicPageModule.forChild(FamliySearchPage),
  ],
})
export class FamliySearchPageModule {}
