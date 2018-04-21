import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the YogaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-yoga',
  templateUrl: 'yoga.html',
})
export class YogaPage {
YogaButton: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.YogaButton = YogaPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YogaPage');
  }

}

// export class YourPageName {
//   YourFancyButton: any;
  
//   constructor(){
//   this.YourFancyButton = YOURPAGE;
//   }