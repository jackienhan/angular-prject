import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CountryComponent} from "../../components/country/country.component";
import {CountryListComponent} from "../../components/country-list/country-list.component";
import {CanDeactivateGuard} from "../../services/can-deactivate-guard.service";
import {AddCountryComponent} from "../../components/add-country/add-country.component";
import {CountryEditComponent} from "../../components/country-edit/country-edit.component";
import {CountryEditCanDeactivateGuardService} from "../../services/country-edit-can-deactivate-guard.service";
const countryRoutes: Routes = [
  {
    path: '',
    component: CountryComponent,
    children: [
      {
        path: 'add',
        component: AddCountryComponent,
        canDeactivate: [CanDeactivateGuard]
      },

      {
        path: 'list',
        component: CountryListComponent,
        children: [
          {
            path: 'edit/:country-id',
            component: CountryEditComponent,
            canDeactivate: [CountryEditCanDeactivateGuardService]
          }
        ]
      }
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(countryRoutes)
  ],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
