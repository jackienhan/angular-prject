import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArticleRoutingModule} from "../article-routing/article-routing.module";
import {ArticleComponent} from "../../components/article/article.component";
import {ArticleListComponent} from "../../components/article-list/article-list.component";
import {ArticleEditComponent} from "../../components/article-edit/article-edit.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ArticleService} from "../../services/article.service";


@NgModule({
  declarations: [
    ArticleComponent,
    ArticleListComponent,
    ArticleEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ArticleRoutingModule
  ],
  providers: [ArticleService]
})
export class ArticleModule { }
