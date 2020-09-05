import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminRoutingModule} from "../admin-routing/admin-routing.module";
import {PersonListComponent} from "../../components/person-list/person-list.component";
import {AdminComponent} from "../../components/admin/admin.component";
import {PersonService} from "../../services/person.service";
import {ReactiveFormsModule} from "@angular/forms";
import {PersonEditComponent} from "../../components/person-edit/person-edit.component";



@NgModule({
  declarations: [
    AdminComponent,
    PersonListComponent,
    PersonEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ],
  providers: [PersonService]
})
export class AdminModule {
  constructor() {
    console.log('AdminModule loaded.');
  }
}
