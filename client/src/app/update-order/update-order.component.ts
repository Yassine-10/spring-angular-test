import {Component, OnInit} from '@angular/core';
import {Order} from "../models/Order";
import {ActivatedRoute, Router} from "@angular/router";
import {OrderService} from "../services/order.service";
import {Article} from "../models/Article";
import {ArticleService} from "../services/article.service";

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit{
  // @ts-ignore
  id: number ;
  data:any;

  public articles: Article[]=[] ;
  public articleSelected:number[]=[] ;
  public article=new Article() ;


  // @ts-ignore
  public order: Order;

  public orderUpdate:Order=new Order();


  constructor(private route: ActivatedRoute,private router: Router,
              private orderService: OrderService,private  articleService:ArticleService) { }

  ngOnInit() {

    this.getOrder();
    this.getArticle();


  }
  getOrder(){
    this.order=new Order();
    this.id = this.route.snapshot.params['id'];

    this.orderService.getOrdersById(this.id)
      .subscribe(data => {
        console.log(data)
        this.data=data;
        this.order = this.data;
        this.order.articles.forEach(a=> {
          if (a.id != null) {
            this.articleSelected.push(a.id);
          }
        })

      }, error => console.log(error));
  }
  getArticle(){
    this.articleService.getArticles().subscribe(data=>{
      this.data=data;
      this.articles=this.data;
    },err=>{
      console.log(err);
    })

  }

  onDateChange(event:any){
    this.order.date= event.value;
  }

  updateOrders() {
    this.articleSelected.forEach(e=>{
      this.article.id=e;
      this.orderUpdate.articles.push(this.article);
      this.article=new Article() ;
    })
    //this.orderUpdate.date=this.order.
    this.orderService.updateOrders(this.id,this.orderUpdate)
      .subscribe(data => {
        console.log(data);
        // @ts-ignore

        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateOrders();
  }

  gotoList() {
    this.router.navigate(['orders']);
  }
}
