import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BootCampPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-boot-camp',
  templateUrl: 'boot-camp.html',
})
export class BootCampPage {
  BootButton: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.BootButton = BootCampPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BootCampPage');
  }

}
