import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Product {

  constructor() { 

    console.log("ANGULAR SERVICES HERE 🤗");
    
   }

   product:{name:string,cost:number,discount:number}[]=[{name:'Laptop',cost:50000,discount:10},
   {name:'Phone',cost:20000,discount:5},
   {name:'Tablet',cost:15000,discount:7},
   {name:'Monitor',cost:10000,discount:15}];

     getProducts(){
      return this.product;
    }
}
