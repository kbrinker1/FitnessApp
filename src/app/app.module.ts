import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { YogaPage } from '../pages/yoga/yoga';
import { AerobicPage} from '../pages/aerobic/aerobic';
import { BootCampPage} from '../pages/boot-camp/boot-camp';
import { CardioPage } from '../pages/cardio/cardio';
import { StrengthTrainingPage} from '../pages/strength-training/strength-training';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    YogaPage,
    AerobicPage,
    BootCampPage,
    StrengthTrainingPage,
    CardioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    YogaPage,
    AerobicPage,
    BootCampPage,
    StrengthTrainingPage,
    CardioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
