import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  
  count : number = 0 ;

  increment(value : number){
    this.count = value +1 ;
  }
  decrement(value : number){
    this.count=value-1;
  }
  reset(value : number){
    this.count=0;
  }


}
