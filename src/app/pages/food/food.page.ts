import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RecipeModalPage } from '../recipe-modal/recipe-modal.page';

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async getMenu(name,food){
    const modal = await this.modalCtrl.create({
      component: RecipeModalPage,
      componentProps: {
        name: name,
        food: food
      }
    });
    modal.present();
  }
}
