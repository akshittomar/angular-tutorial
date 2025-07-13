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
  const target = (event.target as HTMLInputElement).value ; 

  this.day = parseInt(target);
  console.log(this.day);

}

}
