import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PersonComponent} from "../../components/person/person.component";
import {PersonRoutingModule} from "../person-routing/person-routing.module";
import {PersonService} from "../../services/person.service";
import {PersonListComponent} from "../../components/person-list/person-list.component";



@NgModule({
  declarations: [
    PersonComponent,
  ],
  imports: [
    CommonModule,
    PersonRoutingModule
  ],
  providers: [PersonService]
})
export class PersonModule {
  constructor() {
    console.log('PersonModule loaded.');
  }
}
