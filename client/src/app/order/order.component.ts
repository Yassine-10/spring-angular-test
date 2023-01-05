import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Order} from "../models/Order";
import {OrderService} from "../services/order.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements  OnInit{
  public orders: Order[]=[] ;
  data:any;

  // @ts-ignore
  id: number  ;


  constructor(public orderService:OrderService,public router:Router,private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getOrder()

  }

  getOrder(){
    this.orderService.getOrders().subscribe(data=>{
      this.data=data;
      this.orders=this.data;
    },err=>{
      console.log(err);
    })

  }
  createOrder(){
    this.router.navigate(['creatOrder']);
  }


  updateOrder(id: number){
    this.router.navigate(['updateOrder', id]);
  }
}
