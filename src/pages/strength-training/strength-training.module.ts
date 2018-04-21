import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StrengthTrainingPage } from './strength-training';

@NgModule({
  declarations: [
    StrengthTrainingPage,
  ],
  imports: [
    IonicPageModule.forChild(StrengthTrainingPage),
  ],
})
export class StrengthTrainingPageModule {}
