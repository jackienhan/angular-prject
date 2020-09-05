import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CountryRoutingModule} from "../country-routing/country-routing.module";
import {CountryComponent} from "../../components/country/country.component";
import {CountryListComponent} from "../../components/country-list/country-list.component";
import {CountryService} from "../../services/country.service";
import {CountryEditComponent} from "../../components/country-edit/country-edit.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AddCountryComponent} from "../../components/add-country/add-country.component";


@NgModule({
  declarations: [
    CountryComponent,
    CountryListComponent,
    AddCountryComponent,
    CountryEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CountryRoutingModule
  ],
  providers: [CountryService]

})
export class CountryModule {
  constructor() {
    console.log('CountryModule loaded.');
  }
}
