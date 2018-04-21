import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { YogaPage } from '../yoga/yoga';
import { StrengthTrainingPage } from '../strength-training/strength-training';
import {AerobicPage} from '../aerobic/aerobic';
import {BootCampPage} from '../boot-camp/boot-camp';
import {CardioPage} from '../cardio/cardio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  //template: `<button ion-button color="light" block  [navPush]="YourFancyButton">Yoga</button>`
})
export class HomePage {

YogaButton: any;
StrengthButton: any;
AeroButton: any;
BootButton: any;
CardioButton: any;
  constructor(public navCtrl: NavController) {
this.YogaButton = YogaPage;
this.StrengthButton = StrengthTrainingPage;
this.AeroButton = AerobicPage;
this.BootButton = BootCampPage;
this.CardioButton = CardioPage;

  }

  

}
