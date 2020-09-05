import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PersonComponent} from "../../components/person/person.component";
import {PersonListComponent} from "../../components/person-list/person-list.component";
const personRoutes: Routes = [
  {
    path: '',
    component: PersonComponent,
    // children: [
    //   {
    //     path: 'person-list',
    //     component: PersonListComponent
    //   }
    // ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(personRoutes)
  ],
  exports: [RouterModule]
})
export class PersonRoutingModule {
  constructor() {
    console.log('PersonRoutingModule loaded.');
  }
}
