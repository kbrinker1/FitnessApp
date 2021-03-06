import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StrengthTrainingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-strength-training',
  templateUrl: 'strength-training.html',
})
export class StrengthTrainingPage {
  StrengthButton: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.StrengthButton = StrengthTrainingPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StrengthTrainingPage');
  }

}
