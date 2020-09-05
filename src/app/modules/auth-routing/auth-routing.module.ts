import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "../../components/login/login.component";

const authRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(authRoutes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {
  constructor() {
    console.log('AuthRoutingModule loaded.');
  }
}
