import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-stock-card-modal',
  templateUrl: './stock-card-modal.page.html',
  styleUrls: ['./stock-card-modal.page.scss'],
})
export class StockCardModalPage implements OnInit {

  constructor(private modalCtrl: ModalController, private db:AngularFireDatabase) { }
  @Input() ticker: string;

  names = [];
  public _AAPL: AAPL[];
  public _GOOG: GOOG[];
  public _GOOGL: GOOGL[];
  public _FB: FB[];
  public _AMZN: AMZN[];
  public _AMD: AMD[];
  public _F: F[];
  public _GE: GE[];
  public _DIS: DIS[];
  public _DAL: DAL[];
  public _BAC: BAC[];
  public _COOP: COOP[];
  public _BA: BA[];


  public _GPRO: GPRO[];
  public _L: L[];
  public _MSFT: MSFT[];
  public _NVDA: NVDA[];
  public _SNAP: SNAP[];
  public _SPY: SPY[];
  public _TWTR: TWTR[];
  public _UBER: UBER[];
  public _VOO: VOO[];
  public _ZM: ZM[];

  ngOnInit() {
    console.log(this.ticker);
    this.getStarted();
  }

  getMyArray(){
    return this._AAPL;
  }

  close(){
    this.modalCtrl.dismiss();
  }

  async getStarted() {

    var AAPL: AAPL[];
    var GOOG: GOOG[];
    var GOOGL: GOOGL[];
    var FB: FB[];
    var AMZN: AMZN[];
    var AMD: AMD[];
    var F: F[];
    var GE: GE[];
    var DIS: DIS[];
    var BAC: BAC[];
    var COOP: COOP[];
    var BA: BA[];

    var GPRO: GPRO[];
    var L: L[];
    var MSFT: MSFT[];
    var NVDA: NVDA[];
    var SNAP: SNAP[];
    var SPY: SPY[];
    var TWTR: TWTR[];
    var UBER: UBER[];
    var VOO: VOO[];
    var ZM: ZM[];

    await this.getAAPLStocks().then(value => {
      AAPL = value as AAPL[];
    });

    await this.getGOOGStocks().then(value => {
      GOOG = value as GOOG[];
    });

    await this.getGOOGLStocks().then(value => {
      GOOGL = value as GOOGL[];
    });

    await this.getFBStocks().then(value => {
      FB = value as FB[];
    });

    await this.getAMZNStocks().then(value => {
      AMZN = value as AMZN[];
    });

    await this.getAMDStocks().then(value => {
      AMD = value as AMD[];
    });

    await this.getFStocks().then(value => {
      F = value as F[];
    });
    
    await this.getGEStocks().then(value => {
      GE = value as GE[];
    });

    await this.getDISStocks().then(value => {
      DIS = value as DIS[];
    });

    await this.getBACStocks().then(value => {
      BAC = value as BAC[];
    });

    await this.getCOOPStocks().then(value => {
      COOP = value as COOP[];
    });

    await this.getBAStocks().then(value => {
      BA = value as BA[];
    });

    await this.getGPROStocks().then(value => {
      GPRO = value as GPRO[];
    });
    
    await this.getLStocks().then(value => {
      L = value as L[];
    });

    await this.getNVDAStocks().then(value => {
      NVDA = value as NVDA[];
    });

    await this.getGOOGStocks().then(value => {
      GOOG = value as GOOG[];
    });

    await this.getSNAPStocks().then(value => {
      SNAP = value as SNAP[];
    });

    await this.getSPYStocks().then(value => {
      SPY = value as SPY[];
    });

    await this.getTWTRStocks().then(value => {
      TWTR = value as TWTR[];
    });

    await this.getUBERStocks().then(value => {
      UBER = value as UBER[];
    });

    await this.getVOOStocks().then(value => {
      VOO = value as VOO[];
    });

    await this.getZMStocks().then(value => {
      ZM = value as ZM[];
    });


    this._AAPL = AAPL;
    this._GOOG = GOOG;
    this._GOOGL = GOOGL;
    this._FB = FB;
    this._AMZN = AMZN;
    this._AMD = AMD;
    this._F = F;
    this._GE = GE;
    this._DIS = DIS;
    this._BAC = BAC;
    this._COOP = COOP;
    this._BA = BA;
    this._GPRO = GPRO;
    this._L = L;
    this._MSFT = MSFT;
    this._NVDA = NVDA;
    this._SNAP = SNAP;
    this._SPY = SPY;
    this._TWTR = TWTR;
    this._UBER = UBER;
    this._VOO = VOO;
    this._ZM = ZM;

    

    console.log(this._AAPL);
    console.log(this._GOOG);
    console.log(this._AMD);


  }

  getAAPLStocks(){
    return new Promise((resolve, reject)=>{
      this.db.list('AAPL').valueChanges().subscribe(value => {   //CHANGE Stock/AAPL -> Stock/AnyCompanyTicker to get that company or just Stocks to get all companies
        resolve(value);
      });
    });
  }

  getGOOGStocks(){
    return new Promise((resolve, reject)=>{
      this.db.list('GOOG').valueChanges().subscribe(value => {   //CHANGE Stock/AAPL -> Stock/AnyCompanyTicker to get that company or just Stocks to get all companies
        resolve(value);
      });
    });
  }

  getGOOGLStocks(){
    return new Promise((resolve, reject)=>{
      this.db.list('GOOGL').valueChanges().subscribe(value => {   //CHANGE Stock/AAPL -> Stock/AnyCompanyTicker to get that company or just Stocks to get all companies
        resolve(value);
      });
    });
  }

  getFBStocks(){
    return new Promise((resolve, reject)=>{
      this.db.list('FB').valueChanges().subscribe(value => {   //CHANGE Stock/AAPL -> Stock/AnyCompanyTicker to get that company or just Stocks to get all companies
        resolve(value);
      });
    });
  }

  getAMZNStocks(){
    return new Promise((resolve, reject)=>{
      this.db.list('AMZN').valueChanges().subscribe(value => {   //CHANGE Stock/AAPL -> Stock/AnyCompanyTicker to get that company or just Stocks to get all companies
        resolve(value);
      });
    });
  }

  

  getAMDStocks(){
    return new Promise((resolve, reject)=>{
      this.db.list('AMD').valueChanges().subscribe(value => {   //CHANGE Stock/AAPL -> Stock/AnyCompanyTicker to get that company or just Stocks to get all companies
        resolve(value);
      });
    });
  }

  getFStocks(){
    return new Promise((resolve, reject)=>{
      this.db.list('F').valueChanges().subscribe(value => {   //CHANGE Stock/AAPL -> Stock/AnyCompanyTicker to get that company or just Stocks to get all companies
        resolve(value);
      });
    });
  }
  
  getGEStocks(){
    return new Promise((resolve, reject)=>{
      this.db.list('GE').valueChanges().subscribe(value => {   //CHANGE Stock/AAPL -> Stock/AnyCompanyTicker to get that company or just Stocks to get all companies
        resolve(value);
      });
    });
  }

  getDISStocks(){
    return new Promise((resolve, reject)=>{
      this.db.list('DIS').valueChanges().subscribe(value => {   //CHANGE Stock/AAPL -> Stock/AnyCompanyTicker to get that company or just Stocks to get all companies
        resolve(value);
      });
    });
  }

  getBACStocks(){
    return new Promise((resolve, reject)=>{
      this.db.list('BAC').valueChanges().subscribe(value => {   //CHANGE Stock/AAPL -> Stock/AnyCompanyTicker to get that company or just Stocks to get all companies
        resolve(value);
      });
    });
  }

  getCOOPStocks(){
    return new Promise((resolve, reject)=>{
      this.db.list('COOP').valueChanges().subscribe(value => {   //CHANGE Stock/AAPL -> Stock/AnyCompanyTicker to get that company or just Stocks to get all companies
        resolve(value);
      });
    });
  }

  getBAStocks(){
    return new Promise((resolve, reject)=>{
      this.db.list('BA').valueChanges().subscribe(value => {   //CHANGE Stock/AAPL -> Stock/AnyCompanyTicker to get that company or just Stocks to get all companies
        resolve(value);
      });
    });
  }
  
  getGPROStocks(){
    return new Promise((resolve, reject)=>{
      this.db.list('GPRO').valueChanges().subscribe(value => {   //CHANGE Stock/AAPL -> Stock/AnyCompanyTicker to get that company or just Stocks to get all companies
        resolve(value);
      });
    });
  }
  
  getLStocks(){
    return new Promise((resolve, reject)=>{
      this.db.list('L').valueChanges().subscribe(value => {   //CHANGE Stock/AAPL -> Stock/AnyCompanyTicker to get that company or just Stocks to get all companies
        resolve(value);
      });
    });
  }

  getMSFTStocks(){
    return new Promise((resolve, reject)=>{
      this.db.list('MSFT').valueChanges().subscribe(value => {   //CHANGE Stock/AAPL -> Stock/AnyCompanyTicker to get that company or just Stocks to get all companies
        resolve(value);
      });
    });
  }

  getNVDAStocks(){
    return new Promise((resolve, reject)=>{
      this.db.list('NVDA').valueChanges().subscribe(value => {   //CHANGE Stock/AAPL -> Stock/AnyCompanyTicker to get that company or just Stocks to get all companies
        resolve(value);
      });
    });
  }

  getSNAPStocks(){
    return new Promise((resolve, reject)=>{
      this.db.list('SNAP').valueChanges().subscribe(value => {   //CHANGE Stock/AAPL -> Stock/AnyCompanyTicker to get that company or just Stocks to get all companies
        resolve(value);
      });
    });
  }

  getSPYStocks(){
    return new Promise((resolve, reject)=>{
      this.db.list('SPY').valueChanges().subscribe(value => {   //CHANGE Stock/AAPL -> Stock/AnyCompanyTicker to get that company or just Stocks to get all companies
        resolve(value);
      });
    });
  }

  getTWTRStocks(){
    return new Promise((resolve, reject)=>{
      this.db.list('TWTR').valueChanges().subscribe(value => {   //CHANGE Stock/AAPL -> Stock/AnyCompanyTicker to get that company or just Stocks to get all companies
        resolve(value);
      });
    });
  }

  getUBERStocks(){
    return new Promise((resolve, reject)=>{
      this.db.list('UBER').valueChanges().subscribe(value => {   //CHANGE Stock/AAPL -> Stock/AnyCompanyTicker to get that company or just Stocks to get all companies
        resolve(value);
      });
    });
  }

  getVOOStocks(){
    return new Promise((resolve, reject)=>{
      this.db.list('VOO').valueChanges().subscribe(value => {   //CHANGE Stock/AAPL -> Stock/AnyCompanyTicker to get that company or just Stocks to get all companies
        resolve(value);
      });
    });
  }

  getZMStocks(){
    return new Promise((resolve, reject)=>{
      this.db.list('ZM').valueChanges().subscribe(value => {   //CHANGE Stock/AAPL -> Stock/AnyCompanyTicker to get that company or just Stocks to get all companies
        resolve(value);
      });
    });
  }
}
class AAPL {
  price: number;
  difference: number;

}

class GOOG {
  price: number;
  difference: number;

}

class GOOGL {
  price: number;
  difference: number;

}

class FB {
  price: number;
  difference: number;

}

class AMZN {
  price: number;
  difference: number;

}

class AMD {
  price: number;
  difference: number;

}

class F {
  price: number;
  difference: number;

}

class GE {
  price: number;
  difference: number;

}

class DIS {
  price: number;
  difference: number;

}

class BAC {
  price: number;
  difference: number;
}

class COOP {
  price: number;
  difference: number;

}

class BA {
  price: number;
  difference: number;

}

class DAL {
  price: number;
  difference: number;

}


class GPRO {
  price: number;
  difference: number;

}

class L {
  price: number;
  difference: number;

}

class MSFT {
  price: number;
  difference: number;

}

class NVDA {
  price: number;
  difference: number;

}

class SNAP {
  price: number;
  difference: number;

}

class SPY {
  price: number;
  difference: number;

}

class TWTR {
  price: number;
  difference: number;

}

class UBER {
  price: number;
  difference: number;

}

class VOO {
  price: number;
  difference: number;

}

class ZM {
  price: number;
  difference: number;

}