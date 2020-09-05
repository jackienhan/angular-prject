import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogoutComponent } from './components/logout/logout.component';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {AuthModule} from "./modules/auth/auth.module";
import {AppRoutingModule} from "./modules/app-routing/app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {NgxLoadingModule} from "ngx-loading";


@NgModule({
  declarations: [
    AppComponent,
    LogoutComponent,
    DashboardLayoutComponent,
    WelcomeComponent,
    PageNotFoundComponent,



  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    HttpClientModule,
    NgxLoadingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('AppModule loaded.');
  }
}
