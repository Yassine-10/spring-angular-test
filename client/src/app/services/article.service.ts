import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  public host:string="http://localhost:8080"

  constructor(private http:HttpClient) { }

  public getArticles() {
    return this.http.get(this.host+"/articles")
  }
  public getArticleById(id:number){
    return this.http.get(this.host+"/articles/"+id)

  }


  createArticle(article: Object): Observable<Object> {
    return this.http.post(`${this.host+"/articles"}`, article);
  }

  updateArticle(id: number,value: any): Observable<Object> {
    return this.http.put(`${this.host+"/article"}/${id}`, value);
  }


}
