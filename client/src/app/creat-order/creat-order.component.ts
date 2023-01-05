import {Component, OnInit} from '@angular/core';
import {Article} from "../models/Article";
import {ArticleService} from "../services/article.service";
import {Order} from "../models/Order";
import {Router} from "@angular/router";
import {OrderService} from "../services/order.service";


@Component({
  selector: 'app-creat-order',
  templateUrl: './creat-order.component.html',
  styleUrls: ['./creat-order.component.css'],


})
export class CreatOrderComponent implements  OnInit{
  order: Order=new Order() ;
  public articles: Article[]=[] ;
  public articleSelected:number[]=[] ;
  public article=new Article() ;

  data:any;
  submitted = false;





  constructor(private orderService:OrderService,private articleService:ArticleService,
              private router: Router) { }

  ngOnInit() {
    this.getArticle()
  }


  getArticle(){
    this.articleService.getArticles().subscribe(data=>{
      this.data=data;
      this.articles=this.data;
    },err=>{
      console.log(err);
    })

  }

  save() {
    this.articleSelected.forEach(e=>{
      this.article.id=e;
      this.order.articles.push(this.article);
      this.article=new Article() ;
    })

    // @ts-ignore
    this.orderService
      .createOrders(this.order).subscribe(data => {
        console.log(data)
        this.gotoList();
      },
      error => console.log(error));
  }

  onDateChange(event:any){
    this.order.date= event.value;
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['orders']).then(r => {});
  }


}
