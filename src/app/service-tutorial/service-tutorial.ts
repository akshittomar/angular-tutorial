import { Component } from '@angular/core';
import { Product } from '../services/product';

@Component({
  selector: 'app-service-tutorial',
  imports: [],
  templateUrl: './service-tutorial.html',
  styleUrl: './service-tutorial.css'
})
export class ServiceTutorial {

product:{name:string,cost:number,discount:number}[] ;

constructor(productService : Product){
this.product=productService.product ;

}




}
