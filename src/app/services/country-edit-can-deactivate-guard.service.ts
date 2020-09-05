import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {DialogService} from "./dialog.service";
import {CountryEditComponent} from "../components/country-edit/country-edit.component";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class CountryEditCanDeactivateGuardService {
  constructor(private dialogService: DialogService) { }

  canDeactivate(
    component: CountryEditComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {

    let url: string = state.url;
    console.log('CountryEditCanDeactivateGuardService of Url: '+ url);

    if (!component.isUpdating && component.countryForm.dirty) {
      component.isUpdating = false;
      return this.dialogService.confirm('Discard changes for Country?');
    }
    return true;
  }
}
