import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = {
    name: 'Mannie'
  };

  getUser() {
    return this.user;
  }
}
