import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { OrderComponent } from './order/order.component';
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import { CreatOrderComponent } from './creat-order/creat-order.component';
import { CreatArticleComponent } from './creat-article/creat-article.component';
import { UpdateOrderComponent } from './update-order/update-order.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    OrderComponent,
    CreatOrderComponent,
    CreatArticleComponent,
    UpdateOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, MatCardModule, MatGridListModule, FormsModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,
    BrowserAnimationsModule, MatIconModule, MatSelectModule, ReactiveFormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
