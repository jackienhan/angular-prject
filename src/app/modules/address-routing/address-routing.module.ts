import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AddressComponent} from "../../components/address/address.component";

const addressRoutes: Routes = [
  {
    path: '',
    component: AddressComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(addressRoutes)
  ],
  exports: [RouterModule]
})
export class AddressRoutingModule {
  constructor() {
    console.log('AddressRoutingModule loaded.');
  }
}
