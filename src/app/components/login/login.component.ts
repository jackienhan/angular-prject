import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/authentication/auth.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  invalidCredentialMsg: string;
  constructor(private authService: AuthService, private router: Router) {
  }
  ngOnInit(): void {
  }
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });
  onFormSubmit() {
    let uname = this.loginForm.get('username').value;
    let pwd = this.loginForm.get('password').value;
    this.authService.isUserAuthenticated(uname, pwd).subscribe(
      authenticated => {
        if(authenticated) {
          let url =  this.authService.getRedirectUrl();
          console.log('Redirect Url:'+ url);
          this.router.navigate([ url ]);
        } else {
          this.invalidCredentialMsg = 'Invalid Credentials. Try again.';
        }
      }
    );
  }

}
