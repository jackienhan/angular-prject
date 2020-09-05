import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Article} from "../../objects/article";
import {ArticleService} from "../../services/article.service";
import {Observable} from "rxjs/Observable";
import {DialogService} from "../../services/dialog.service";

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit {
  article: Article;
  isUpdating = false;
  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private dialogService: DialogService,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.articleService.getArticle(+params['id']))
      .subscribe(article => {
          this.article = article;
          this.setFormValues();
        }
      );
  }
  articleForm = new FormGroup({
    title: new FormControl(),
    category: new FormControl()
  });
  setFormValues() {
    this.articleForm.setValue({title: this.article.title, category: this.article.category});
  }
  onFormSubmit() {
    this.isUpdating = true;
    this.article.title = this.articleForm.get('title').value;
    this.article.category = this.articleForm.get('category').value;

    this.articleService.updateArticle(this.article)
      .subscribe(() =>
        this.router.navigate([ '../' ], { relativeTo: this.route })
      );
  }
  canDeactivate(): Observable<boolean> | boolean {
    if (!this.isUpdating && this.articleForm.dirty) {
      this.isUpdating = false;
      return this.dialogService.confirm('Discard changes for Article?');
    }
    return true;
  }
}
