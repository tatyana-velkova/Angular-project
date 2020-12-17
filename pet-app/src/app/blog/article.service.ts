import { Subject } from "rxjs";
import { Article } from "./article.model";

export class ArticleService {

  private articles: Article[] = [];
  articleChanged = new Subject<Article[]>();

  //private articles: Article[] = [
  //  new Article('Helathy food for your dog',
  //   'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'),

  //  new Article ('Teach your dog to good habits', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')
  //];

  getArticles(){
    return this.articles;
  }

  getArticle(index: number){
    return this.articles[index];
  }

  addArticle(article: Article){
    this.articles.push(article);
    this.articleChanged.next(this.articles.slice());
  }

  deleteArticle(index: number){
    this.articles.splice(index, 1);
    this.articleChanged.next(this.articles.slice());
  }

  setArticles(articles: Article[]){
    this.articles = articles;
    this.articleChanged.next(this.articles.slice());
  }


  updateArticle(index:number, newArticle: Article){
    this.articles[index] = newArticle;
    this.articleChanged.next(this.articles.slice());
  }
}
