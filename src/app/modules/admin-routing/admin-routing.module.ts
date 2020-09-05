import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AdminComponent} from "../../components/admin/admin.component";
import {PersonListComponent} from "../../components/person-list/person-list.component";
import {AuthGuardService} from "../../services/authentication/auth-guard.service";
import {PersonEditComponent} from "../../components/person-edit/person-edit.component";
import {CanDeactivateGuard} from "../../services/can-deactivate-guard.service";

const personRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'person-list',
        component: PersonListComponent,
        canActivate: [ AuthGuardService ],
        children: [
          {
            path: ':id',
            component: PersonEditComponent,
            canDeactivate: [CanDeactivateGuard]
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
    RouterModule.forChild(personRoutes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule {
  constructor() {
    console.log('AdminRoutingModule loaded.');
  }
}
