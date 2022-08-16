import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  url = 'https://newsapi.org/v2';
  apiKey = 'da37c1783575426d893be0c447fe9f95';
 
  totalPosts = null;
  pages: any;
 
  constructor(private http: HttpClient) {}
 
  getTopNews(cat) {
    return this.http.get(
      `${this.url}/top-headlines?category=${cat}&country=us&apiKey=${
        this.apiKey
      }`
    ).pipe(map(res => res['articles']));
  }
 
  getSportSources() {
    return this.http
      .get(
        `${this.url}/sources?category=sports&language=en&apiKey=${this.apiKey}`
      )
      .pipe(map(res => res['sources']));
  }

}




  

