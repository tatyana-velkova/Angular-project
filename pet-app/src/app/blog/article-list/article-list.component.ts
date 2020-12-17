import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Article } from '../article.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit, OnDestroy {
  articles: Article[];
  subscription: Subscription;


  constructor(private articleService: ArticleService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.articleService.articleChanged.subscribe(
      (articles: Article[]) => {
        this.articles = articles;
      }
    )
    this.articles = this.articleService.getArticles();
  }


  addArticle(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
