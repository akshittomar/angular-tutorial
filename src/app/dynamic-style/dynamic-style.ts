import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-style',
  imports: [],
  templateUrl: './dynamic-style.html',
  styleUrl: './dynamic-style.css'
})
export class DynamicStyle {

  color1="blue";
  color2="grey";
  color=this.color1;



  changeColor(){
    if(this.color===this.color1)
      this.color=this.color2;
    else
      this.color=this.color1;
  }


}
