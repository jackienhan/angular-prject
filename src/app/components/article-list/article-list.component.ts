import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Article} from "../../objects/article";
import {ArticleService} from "../../services/article.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articles: Observable<Article[]> ;
  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router) {}
  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }
  goToEdit(article: Article) {
    this.router.navigate([ article.articleId ], { relativeTo: this.route });
  }

}
