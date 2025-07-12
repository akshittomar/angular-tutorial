import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else-tutorial',
  imports: [],
  templateUrl: './if-else-tutorial.html',
  styleUrl: './if-else-tutorial.css'
})
export class IfElseTutorial {

value:boolean=true ;
age:string="";
toHide():void{
this.value=false;
}
toShow():void{
this.value=true;
}
toToggle():void{
  this.value=!this.value;
}
submitAge(event:Event){
const value =  event.target as HTMLInputElement ;
this.age = value.value ; 

}
eligibility:boolean = false ;
isEligible():void{
  if(this.age === "" || isNaN(Number(this.age)) || Number(this.age) < 18) {
    this.eligibility=false;
    return;
  }
  this.eligibility=true;
}

hello():boolean{
  return true;
}


}
