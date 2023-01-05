import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../services/article.service";
import { Router} from "@angular/router";
import {Article} from "../models/Article";
import * as events from "events";


@Component({
  selector: 'app-creat-article',
  templateUrl: './creat-article.component.html',
  styleUrls: ['./creat-article.component.css']
})
export class CreatArticleComponent implements OnInit{

  article: Article=new Article() ;
  submitted = false;





  constructor(private articlelService:ArticleService,
              private router: Router) { }

  ngOnInit() {


  }

onSelectFile(e:any){
  if(e.target.files){
    var reader=new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=(event:any)=>{
     // this.url=event.target.url;
      this.article.picture=e.target.files[0].name;
    }
  }

}

  save() {
    // @ts-ignore
    this.articlelService
      .createArticle(this.article).subscribe(data => {
        console.log(data)
        this.gotoList();
      },
      error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['articles']).then(r => {});
  }
}
