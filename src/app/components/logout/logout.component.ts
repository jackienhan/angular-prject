import { Component, OnInit } from '@angular/core';
import {User} from "../../objects/user";
import {AuthService} from "../../services/authentication/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  loggedInUser: User;
  constructor(private authService: AuthService, private router: Router) {
  }
  ngOnInit() {
    this.loggedInUser = this.authService.getLoggedInUser();
  }
  logout() {
    this.authService.logoutUser();
    this.loggedInUser = null;
    this.router.navigate([ "/welcome" ]);
  }

}
