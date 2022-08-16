import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

import { IonicStorageModule } from '@ionic/storage';

import { ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform, LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs/Subscription';
import { filter } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { ApiService } from 'src/app/services/api.service';

import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';

import { finalize } from 'rxjs/operators';
import { from } from 'rxjs';
import { NavigationExtras } from '@angular/router';

declare var google; 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage{
  selected = 'sports';
  news = [];

  @ViewChild('map') mapElement: ElementRef;

  map: any;
  markers = [];

  currentMapTrack = null;

  isTracking = false;
  trackedRoute = [];
  previousTracks = [];
  data = [];
  API_KEY = '';
  positionSubscription: Subscription;

  constructor(private callNumber: CallNumber, public navCtrl: NavController, private plt: Platform, private storage: Storage, 
    public platform: Platform, private apiService: ApiService, private https: HttpClient, private nativeHttp: HTTP,
    private http: HttpClient, private loadingCtrl: LoadingController ) {

     }

  ngOnit(){
    this.loadData();
  }

  async loadData() {
    let loading = await this.loadingCtrl.create();
    await loading.present();
 
    this.apiService.getTopNews(this.selected).subscribe(res => {
      loading.dismiss();
      this.news = res;
    },error =>{
      loading.dismiss();
    });
  }
 
  segmentChanged(e) {
    this.loadData();
  }
 
  open(n) {
    console.log(n);
  }

  call(number){
    this.callNumber.callNumber(number, true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }

  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }

}
