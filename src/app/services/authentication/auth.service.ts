import { Injectable } from '@angular/core';



import {User} from "../../objects/user";

// @ts-ignore
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map'
const USERS = [
  new User(1, 'mahesh', 'm123', 'ADMIN'),
  new User(2, 'krishna', 'k123', 'ADMIN')
];

@Injectable()
export class AuthService {
  private redirectUrl: string = '/';
  private loginUrl: string = '/login';
  private isloggedIn: boolean = false;
  private loggedInUser: User;
  private usersObservable: Observable<User[]>;
  getAllUsers(): Observable<User[]> {
    this.usersObservable = Observable.of(USERS);
    return this.usersObservable;
  }
  isUserAuthenticated(username: string, password:string): Observable<boolean> {
    return this.getAllUsers()
      .map(users => {
        let user = 	users.find(user => (user.username === username) && (user.password === password));
        if(user) {
          this.isloggedIn = true;
          this.loggedInUser = user;
        } else {
          this.isloggedIn = false;
        }
        return this.isloggedIn;
      });
  }
  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }
  getRedirectUrl(): string {
    return this.redirectUrl;
  }
  setRedirectUrl(url: string): void {
    this.redirectUrl = url;
  }
  getLoginUrl(): string {
    return this.loginUrl;
  }
  getLoggedInUser(): User {
    return this.loggedInUser;
  }
  logoutUser(): void{
    this.isloggedIn = false;
  }
}
