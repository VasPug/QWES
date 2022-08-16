import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController, ModalController } from '@ionic/angular';

import { AngularFireDatabase } from '@angular/fire/database';
import 'firebase/database';
import { StockCardModalPage } from './../stock-card-modal/stock-card-modal.page';
import { GraphPage } from '../graph/graph.page';
import { PostsService } from 'src/app/services/posts.service';
import { Observable } from 'rxjs';
import { Post } from 'src/app/Modal/Post';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {


  
  public posts: Observable<Post[]>;
  
  constructor(private authService: AuthService, private toastCtrl: ToastController,
    private db: AngularFireDatabase, private modalCtrl: ModalController, private postService: PostsService) {
      this.posts = this.postService.getPosts();
     }

  ngOnInit() {
  }

  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

  async getGraph(ticker){
    const modal = await this.modalCtrl.create({
      component: GraphPage,
      componentProps: {
        ticker: ticker
      }
    });
    modal.present();
  }

  async findStock(ticker){
    console.log("ticker" + ticker);
    const modal  = await this.modalCtrl.create({
      component: GraphPage,
      componentProps: {
        ticker: ticker
      }
    });
    modal.present();
  }

  async logout(){
    this.authService.signOut();
    let toast = await this.toastCtrl.create({
      duration: 3000,
      message: "logged out succcesfully"
    });
    toast.present();
  }
}


