import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = {
    name: 'Mannie'
  };
  url = environment.backendURL;

  getUser() {
    return this.user;
  }
}
