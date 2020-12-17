import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Article } from '../article.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {
  id: number;
  editMode = false;
  articleForm: FormGroup;

  constructor(private route: ActivatedRoute, private articleService: ArticleService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    )
  }
  initForm() {
    let articleTitle = '';
    let articleDescription = '';

    if(this.editMode){
      const article = this.articleService.getArticle(this.id);

      articleTitle = article.title;
      articleDescription = article.description;

    }

    this.articleForm = new FormGroup({
      'title': new FormControl(articleTitle, Validators.required),
      'description': new FormControl(articleDescription, Validators.required)
    });
  }


  submit(){
    const newArticle: Article = new Article(this.articleForm.value['title'], this.articleForm.value['description']);

    if(this.editMode){
      this.articleService.updateArticle(this.id, newArticle);
    }else {
      this.articleService.addArticle(newArticle);
    }

    this.router.navigate(['../'], {relativeTo: this.route});
  }


  cancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
