import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/database';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-graph',
  templateUrl: './graph.page.html',
  styleUrls: ['./graph.page.scss'],
})
export class GraphPage implements OnInit {
  @Input() ticker: String;
  stock = this.ticker;
  start: string;
  end: string;
  chartData: ChartDataSets[] = [{ data: [], label: 'Stock price' }];
  chartLabels: Label[];
 
  // Options
  chartOptions = {
    responsive: true,
    title: {
      display: true,
      text: 'Historic Stock price'
    },
    pan: {
      enabled: true,
      mode: 'xy'
    },
    zoom: {
      enabled: true,
      mode: 'xy'
    }
  };
  chartColors: Color[] = [
    {
      borderColor: '#000000',
      backgroundColor: '#ff00ff'
    }
  ];
  chartType = 'line';
  showLegend = false;
 
  constructor(private http: HttpClient, private modalCtrl: ModalController, private db:AngularFireDatabase) { 

  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getData();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }
  
  getData() {
      console.log("Stock name: " + this.ticker);
      this.http.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${this.ticker}?from=2020-05-19&to=2020-05-29&apikey=b14b67761bf2ef55e3ec5bcce3343f37`).subscribe(res => {
      const history = res['historical'];
 
      this.chartLabels = [];
      this.chartData[0].data = [];
 
      for(var i = history.length-1; i >= 0;i--){
        this.chartLabels.push(history[i].date);
        this.chartData[0].data.push(history[i]['close']);
      }
      
    });
  }

  ngOnInit() {
    console.log(this.ticker);
    this.getData();
  }

  close(){
    this.modalCtrl.dismiss();
  }

  typeChanged(e) {
    const on = e.detail.checked;
    this.chartType = on ? 'line' : 'bar';
  }

}
