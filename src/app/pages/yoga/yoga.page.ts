import { Component } from '@angular/core';

import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { storage } from 'firebase';
import * as firebase from 'firebase';
import { NgZone} from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';


export interface MyData {
  name: string;
  filepath: string;
  size: number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'yoga.page.html',
  styleUrls: ['yoga.page.scss'],
})
export class YogaPage {
  

  task: AngularFireUploadTask;

  percentage: Observable<number>;

  snapshot: Observable<any>;

  UploadedFileURL: Observable<string>;

  images: Observable<MyData[]>;

  fileName:string;
  fileSize:number;

  isUploading:boolean;
  isUploaded:boolean;

  store;
  storageRef;
  imagesRef;
  yogaRef;

  img_src_string: any;

  imgpose: string;


  private imageCollection: AngularFirestoreCollection<MyData>;
  constructor(private storage: AngularFireStorage, private database: AngularFirestore, public zone: NgZone, private iab: InAppBrowser, public actionSheetController: ActionSheetController) {
    this.isUploading = false;
    this.isUploaded = false;
    this.imageCollection = database.collection<MyData>('yogaImages');
    this.images = this.imageCollection.valueChanges();
    this.store = firebase.storage();
    this.storageRef = firebase.storage().ref();
    this.imagesRef = this.storageRef.child('output');
    

    var fileName = 'output.png';
    this.yogaRef = this.imagesRef.child(fileName);

  }

  getimg(){
    
    const browser = this.iab.create('https://firebasestorage.googleapis.com/v0/b/facebookchat-f1db0.appspot.com/o/output%2Foutput?alt=media&token=bb58766e-e2dd-4e1c-9880-a1f5b01cddba');

  }


  uploadFile(event: FileList) {

    var storage = firebase.storage();
    var outputRef = storage.ref('output/output');
    

    const file = event.item(0)

    if (file.type.split('/')[0] !== 'image') { 
     console.error('unsupported file type :( ')
     return;
    }

    this.isUploading = true;
    this.isUploaded = false;


    this.fileName = "Yoga position image";

    const path = `yogaImages/yoga`;

    const customMetadata = { app: 'Yoga Image Upload Demo' };

    const fileRef = this.storage.ref(path);

    this.task = this.storage.upload(path, file, { customMetadata });

    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(
      
      finalize(() => {
        this.UploadedFileURL = fileRef.getDownloadURL();
        
        this.UploadedFileURL.subscribe(resp=>{
          this.addImagetoDB({
            name: file.name,
            filepath: resp,
            size: this.fileSize
          });
          this.isUploading = false;
          this.isUploaded = true;
        },error=>{
          console.error(error);
        })
      }),
      tap(snap => {
          this.fileSize = snap.totalBytes;
      })
    )
  }

  addImagetoDB(image: MyData) {
    const id = this.database.createId();

    this.imageCollection.doc(id).set(image).then(resp => {
      console.log(resp);
    }).catch(error => {
      console.log("error " + error);
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }
  

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Asthnas',
      buttons: [{
        text: 'Tree pose',
        icon: 'man',
        handler: () => {
          this.imgpose = "/assets/treepose.png" 
        }
      }, 

      {
        text: 'Downward-dog', 
        icon: 'man',
        handler: () => {
          this.imgpose = "/assets/downwarddog.png" 
        }
      },
      
      {
        text: 'Warrior 1',
        icon: 'man',
        handler: () => {
          this.imgpose = "/assets/warrior1.png" 
        }
      }, 
      {
        text: 'Warrior 2',
        icon: 'man',
        handler: () => {
          this.imgpose = "/assets/warrior2.png" 
        }
      },
      {
        text: 'Warrior 3',
        icon: 'man',
        handler: () => {
          this.imgpose = "/assets/warrior3.png" 
        }
      },
      {
        text: 'Sun Pose',
        icon: 'man',
        handler: () => {
          this.imgpose = "/assets/sunpose.png" 
        }
      },
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }


}