import { Component   } from '@angular/core';
import { NgIf , NgFor , NgSwitch , NgSwitchCase , NgSwitchDefault  } from '@angular/common';

@Component({
  selector: 'app-directive',
  imports: [ NgIf , NgFor , NgSwitch , NgSwitchCase , NgSwitchDefault ],
  templateUrl: './directive.html',
  styleUrl: './directive.css'
})
export class Directive {
value : boolean = true ;

student:string[] = ['John' , 'Jane' , 'Doe' , 'Smith' , 'Emily', 'Michael' ];


studentData = [ {
  name : 'John' ,email: 'john@example.com' ,age : 20 , subjects : ['Math' , 'Science' , 'History' ]
},{
  name : 'Jane' ,email: 'jane@example.com', age : 22 , subjects : ['English' , 'Art' , 'Physical Education' ]
},{
  name : 'Doe' ,email: 'doe@example.com', age : 21 , subjects : ['Biology' , 'Chemistry' , 'Physics' ]
} 
]


isLoggedIn : boolean = false ; 


updateLogin(){
  this.isLoggedIn=!this.isLoggedIn ; 
}

color : string = "Red" ;
updateColor(event:Event){

  this.color= (event.target as HTMLInputElement).value ; 

  


}



}
