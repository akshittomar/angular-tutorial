import { Component , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-emit',
  imports: [],
  templateUrl: './child-emit.html',
  styleUrl: './child-emit.css'
})
export class ChildEmit {

 users:string[]=['ALICE','BOB','PETER','JOHN','DAVID','TOM','HENRY'];// we will be sending this data to parent cpmponent

 @Output() out = new EventEmitter();

 sendToParent(){
  this.out.emit(this.users);
 }



}
