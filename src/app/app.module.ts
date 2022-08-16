import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule} from "@angular/fire/firestore";
import { AngularFireModule } from "@angular/fire";
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireDatabaseModule } from '@angular/fire/database';

import 'chartjs-plugin-zoom';
import { StockCardModalPageModule } from './pages/stock-card-modal/stock-card-modal.module';
import { GraphPageModule } from './pages/graph/graph.module';

import { IonicStorageModule } from '@ionic/storage';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { CallNumber } from '@ionic-native/call-number/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import {HTTP} from '@ionic-native/http/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,AngularFireAuthModule,HttpClientModule,AngularFireDatabaseModule, 
    StockCardModalPageModule, GraphPageModule,IonicStorageModule.forRoot(),AngularFireStorageModule, BrowserModule,HttpClientModule],
  providers: [
    StatusBar,
    InAppBrowser,
    CallNumber,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HTTP
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
