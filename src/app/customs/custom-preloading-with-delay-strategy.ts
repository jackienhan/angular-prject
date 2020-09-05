import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
// @ts-ignore
import { Observable } from 'rxjs/Observable';
import { timer } from 'rxjs/observable/timer';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class CustomPreloadingWithDelayStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      console.log('Preload Path: ' + route.path + ', delay:' + route.data['delay']);
      if (route.data['delay']) {
        return timer(5000).mergeMap(() => load());
      }
      return load();
    } else {
      return Observable.of(null);
    }
  }
}
