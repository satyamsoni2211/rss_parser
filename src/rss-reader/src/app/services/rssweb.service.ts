import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RsswebService {
  constructor(private http: HttpClient) {}

  get_feeds(url) {
    const options = {
      params: {
        url
      }
    };
    return this.http.get<any>('http://127.0.0.1:5000/parse', options);
  }
}
