import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthGuardService} from "../../services/authentication/auth-guard.service";
import {WelcomeComponent} from "../../components/welcome/welcome.component";
import {PageNotFoundComponent} from "../../components/page-not-found/page-not-found.component";
import {DashboardLayoutComponent} from "../../components/dashboard-layout/dashboard-layout.component";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {CustomPreloadingStrategy} from "../../customs/custom-preloading-strategy";
import {CustomPreloadingWithDelayStrategy} from "../../customs/custom-preloading-with-delay-strategy";
import {CanDeactivateGuard} from "../../services/can-deactivate-guard.service";


const routes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DashboardLayoutComponent,
    data: {preload: true, delay: true},
    children: [
      {
        path: 'address',
        loadChildren: () =>import('../address/address.module').then(m => m.AddressModule),
        data: {preload: true, delay: true}
      },
      {
        path: 'admin',
        loadChildren: () =>import('../admin/admin.module').then(m => m.AdminModule),
        canLoad: [ AuthGuardService ],
        data: {preload: true, delay: true}
      },
      {
        path: 'country',
        loadChildren: () =>import('../country/country.module').then(m => m.CountryModule),
        data: {preload: true, delay: true}
      },
      {
        path: 'person',
        loadChildren: () =>import('../person/person.module').then(m => m.PersonModule),
        data: {preload: true, delay: true}
      },
      {
        path: 'article',
        loadChildren: () =>import('../article/article.module').then(m => m.ArticleModule),
        data: {preload: true, delay: true}
      },
      {
        path: 'form',
        loadChildren: () =>import('../forms/form/form.module').then(m => m.FormModule),
        data: {preload: true, delay: true}
      },
      {
        path: 'decorator',
        loadChildren: () => import('../decorator/decorator/decorator.module').then(m => m.DecoratorModule)
      },
      {
        path: 'welcome',
        component: WelcomeComponent,
        data: {preload: true, delay: true}
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreloadingWithDelayStrategy
    })
  ],
  exports: [RouterModule],
  providers: [
    AuthGuardService,
    CustomPreloadingWithDelayStrategy,
    CanDeactivateGuard,
  ]
})
export class AppRoutingModule {
  constructor() {
    console.log('AppRoutingModule loaded.');
  }
}
