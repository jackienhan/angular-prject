import { Injectable }    from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// @ts-ignore
import { Observable }    from 'rxjs/Observable';
export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate,
                route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot) {

    let url: string = state.url;
    console.log('canDeactivate of Url: '+ url);

    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
