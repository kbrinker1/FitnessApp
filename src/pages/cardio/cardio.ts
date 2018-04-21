import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CardioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cardio',
  templateUrl: 'cardio.html',
})
export class CardioPage {
  CardioButton: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.CardioButton = CardioPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardioPage');
  }

}
