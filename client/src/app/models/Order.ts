import {Article} from "./Article";

export class Order {
  // @ts-ignore
  id:number;
  reference?:string;
  date?:Date;
  articles:Article[]=[];

  // @ts-ignore
  constructor() {

  }
  // @ts-ignore
  constructor(data: any) {
    this.id=data.id;
    this.reference=data.reference;
    this.date=data.date;


  }





}
