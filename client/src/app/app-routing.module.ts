import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticleComponent} from "./article/article.component";
import {OrderComponent} from "./order/order.component";
import {CreatArticleComponent} from "./creat-article/creat-article.component";
import {CreatOrderComponent} from "./creat-order/creat-order.component";
import {UpdateOrderComponent} from "./update-order/update-order.component";

const routes: Routes = [
  {
    path: 'articles',
    component: ArticleComponent
  },
  {
    path: 'articles/:id',
    component: ArticleComponent
  },
  {
    path: 'creatArticle',
    component: CreatArticleComponent
  },
  {
    path: 'orders',
    component: OrderComponent
  },
  {
    path: 'creatOrder',
    component: CreatOrderComponent
  },
  {
    path: 'updateOrder/:id',
    component: UpdateOrderComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
