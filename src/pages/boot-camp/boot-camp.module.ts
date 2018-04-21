import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BootCampPage } from './boot-camp';

@NgModule({
  declarations: [
    BootCampPage,
  ],
  imports: [
    IonicPageModule.forChild(BootCampPage),
  ],
})
export class BootCampPageModule {}
