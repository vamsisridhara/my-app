import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  addHeaders() {
    return {};
  }
  get(url) {
    return this.httpClient.get(url, this.addHeaders());
  }
  post(url) {
    return this.httpClient.post(url, this.addHeaders());
  }
  put() { }
  delete() { }
}
