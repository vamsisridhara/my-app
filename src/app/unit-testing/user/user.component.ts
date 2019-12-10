import { Component, OnInit } from '@angular/core';
import { UserService } from './../../api/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: { name: string };
  isUserLoggedIn = false;
  userDetail;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userDetail = this.userService.getUser();
    if (this.userDetail) {
      this.user = this.userDetail;
      this.isUserLoggedIn = true;
    } else {
      this.isUserLoggedIn = false;
    }
  }

}
