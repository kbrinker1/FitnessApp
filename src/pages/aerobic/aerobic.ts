import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AerobicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aerobic',
  templateUrl: 'aerobic.html',
})
export class AerobicPage {
  AeroButton: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.AeroButton = AerobicPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AerobicPage');
  }

}
