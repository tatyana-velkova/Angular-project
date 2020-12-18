import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { DataStorageService } from "../data-storage.service";
import { Article } from "./article.model";
import { ArticleService } from "./article.service";

@Injectable({providedIn: 'root'})
export class ArticleResolverService implements Resolve<Article[]>{

  constructor(private dataStorageService: DataStorageService,
              private articleService: ArticleService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const articles = this.articleService.getArticles();

    if(articles.length === 0){
      return this.dataStorageService.fetchArticles();
    } else{
      return articles;
    }

  }

}
