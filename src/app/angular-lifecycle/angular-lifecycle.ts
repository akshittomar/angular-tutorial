import { Component, Input } from '@angular/core';
// import { NgIf  } from '@angular/common';

@Component({
  selector: 'app-angular-lifecycle',
  imports: [],
  templateUrl: './angular-lifecycle.html',
  styleUrl: './angular-lifecycle.css'
})
export class AngularLifecycle {
val=5;
constructor(){
  
  console.log("Constructor Here !");
  this.val = 10;
  console.log("Value is :"+this.val);
}
ngOnInit(){
  this.val=20;
  console.log("ngOnInit Here !");
  console.log("Value is :"+this.val);
}

@Input() parentData = 0;
ngOnChanges(){
  console.log("ngOnChange here 🙋‍♂️I will appear on every change in the current component");
  console.log(this.parentData);
  
}

ngOnDestroy(){
  console.log("ngOnDestroy Here ");
  
}
}
