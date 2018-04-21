import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardioPage } from './cardio';

@NgModule({
  declarations: [
    CardioPage,
  ],
  imports: [
    IonicPageModule.forChild(CardioPage),
  ],
})
export class CardioPageModule {}
