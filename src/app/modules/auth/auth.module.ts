import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "../../components/login/login.component";
import {AuthService} from "../../services/authentication/auth.service";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthRoutingModule} from "../auth-routing/auth-routing.module";



@NgModule({
  declarations: [LoginComponent],
  imports: [
    ReactiveFormsModule,
    AuthRoutingModule,
    CommonModule
  ],
  providers: [AuthService]
})
export class AuthModule {
  constructor() {
    console.log('AuthModule loaded.');
  }
}
