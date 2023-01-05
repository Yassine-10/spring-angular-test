import {Component, OnInit} from '@angular/core';
import {Article} from "../models/Article";
import {ArticleService} from "../services/article.service";
import { ActivatedRoute,Router} from "@angular/router";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent  implements OnInit{

  public articles: Article[]=[] ;
  data:any;

  public article=new Article();


  // @ts-ignore
  id: number  ;
  url='/assets/img/';


  constructor(public articleService:ArticleService,public router:Router,private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    if(this.id==null){
      this.getArticle()
    }else{
      this.getArticleById(this.id)
    }

  }

  getArticle(){
    this.articleService.getArticles().subscribe(data=>{
     this.data=data;
      this.articles=this.data;
    },err=>{
      console.log(err);
    })

  }
  createArticle(){
    this.router.navigate(['creatArticle']);
  }
  getArticleById(id: number){
    this.articleService.getArticleById(id).subscribe(data=>{
      this.data=data;
      this.article=this.data;
      this.articles.push(this.article);
    },err=>{
      console.log(err);
    })

  }
  goToArticle(id: number){
    this.router.navigate(['articles', id]);
  }

}
