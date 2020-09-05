import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArticleComponent} from "../../components/article/article.component";
import {RouterModule, Routes} from "@angular/router";
import {PersonListComponent} from "../../components/person-list/person-list.component";
import {AuthGuardService} from "../../services/authentication/auth-guard.service";
import {PersonEditComponent} from "../../components/person-edit/person-edit.component";
import {CanDeactivateGuard} from "../../services/can-deactivate-guard.service";
import {ArticleListComponent} from "../../components/article-list/article-list.component";
import {ArticleEditComponent} from "../../components/article-edit/article-edit.component";


const articleRoutes: Routes = [
  {
    path: '',
    component: ArticleComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'list',
        component: ArticleListComponent,
        canActivateChild: [ AuthGuardService ],
        children: [
          {
            path: ':id',
            component: ArticleEditComponent,
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
    RouterModule.forChild(articleRoutes)
  ],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
