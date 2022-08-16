import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-modal',
  templateUrl: './recipe-modal.page.html',
  styleUrls: ['./recipe-modal.page.scss'],
})
export class RecipeModalPage implements OnInit {
  

  constructor(private modalCtrl: ModalController) { }
  @Input() name: string;
  @Input() food: string;
  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }
}
