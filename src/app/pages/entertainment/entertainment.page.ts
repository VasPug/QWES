import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


declare var HKVideoPlayer;


@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.page.html',
  styleUrls: ['./entertainment.page.scss'],
})

export class EntertainmentPage implements OnInit {

  constructor(public navCtrl: NavController) { 

  }

  ngOnInit() {
  }

  watch(){
    HKVideoPlayer.play('https://youtu.be/21X5lGlDOfg');
  }


}
