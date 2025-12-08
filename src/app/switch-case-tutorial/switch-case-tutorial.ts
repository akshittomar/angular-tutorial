import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-case-tutorial',
  imports: [],
  templateUrl: './switch-case-tutorial.html',
  styleUrl: './switch-case-tutorial.css'
})
export class SwitchCaseTutorial {

  day:number = 0 ;

handleDays(event:Event){
  const dayValue = (event.target as HTMLInputElement).value ; 

  this.day = parseInt(dayValue);
  console.log(this.day);

}

}
