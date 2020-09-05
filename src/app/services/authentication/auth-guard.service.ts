import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot
} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanLoad, CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {
  }
  canLoad(route: Route): boolean {
    let url: string = route.path;
    console.log('canLoad of Url:'+ url);
    if (this.authService.isUserLoggedIn()) {
      return true;
    }
    this.authService.setRedirectUrl(url);
    this.router.navigate([ this.authService.getLoginUrl() ]);
    return false;
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    console.log('canActivate of Url:'+ url);
    if (this.authService.isUserLoggedIn()) {
      return true;
    }
    this.authService.setRedirectUrl(url);
    this.router.navigate([ this.authService.getLoginUrl() ]);
    return false;
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let loggedInUser= this.authService.getLoggedInUser();
    if (loggedInUser.role === 'ADMIN') {
      return true;
    } else {
      console.log('Unauthorized to open link: '+ state.url);
      return false;
    }
  }
}
