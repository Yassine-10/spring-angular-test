import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public host:string="http://localhost:8080"

  constructor(private http:HttpClient) { }

  public getOrders() {
    return this.http.get(this.host+"/orders")
  }
  public getOrdersById(id: number | undefined) {
    return this.http.get(this.host+"/orders/"+id)
  }


  createOrders(orders: Object): Observable<Object> {
    return this.http.post(`${this.host+"/orders"}`, orders);
  }

  updateOrders(id: number | undefined, value: any): Observable<Object> {
    return this.http.put(`${this.host+"/orders"}/${id}`, value);
  }
}
