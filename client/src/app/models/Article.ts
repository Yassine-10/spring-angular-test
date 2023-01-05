import {Order} from "./Order";

export class Article {
  id?:number;
  name?:string;
  price?:boolean;
  picture?:string;



  // @ts-ignore
  constructor() {

  }
  // @ts-ignore
  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.price = data.price;
    this.picture = data.picture;
  }











}
