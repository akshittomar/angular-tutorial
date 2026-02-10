import { afterEveryRender, Component, ViewChild , afterNextRender} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPipe } from './test-pipe';
import { Login } from './login/login';
import { TestComponent } from './test/test.component';
import { VariableDecleration } from './variable-decleration/variable-decleration';
import { Counter } from './counter/counter';
import { EnentTutorial } from './enent-tutorial/enent-tutorial';
import { AppStyleTutorial } from './app-style-tutorial/app-style-tutorial';
import { IfElseTutorial } from './if-else-tutorial/if-else-tutorial';
import { SwitchCaseTutorial } from './switch-case-tutorial/switch-case-tutorial';
import { ForLoopTutorial } from './for-loop-tutorial/for-loop-tutorial';
import { SignalTutorial } from './signal-tutorial/signal-tutorial';
import {ContextualVar } from './contextual-var/contextual-var';
import { TodoList } from './todo-list/todo-list';
import { TodoApp } from './todo-app/todo-app';
import { NgModelTutorial } from './ng-model-tutorial/ng-model-tutorial';
import { DynamicStyle } from './dynamic-style/dynamic-style';
import {Directive} from './directive/directive';
import { Navbar } from './navbar/navbar';
import { DynamicRouteHome } from './dynamic-route-home/dynamic-route-home';
import { Forms } from './forms/forms';
import { ChildComponent } from './child-component/child-component';
import { ChildEmit } from './child-emit/child-emit';
import { AngularLifecycle } from './angular-lifecycle/angular-lifecycle';
import { Product } from './services/product';




@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, TestPipe,Login, TestComponent , VariableDecleration , Counter , EnentTutorial , AppStyleTutorial , IfElseTutorial, SwitchCaseTutorial , ForLoopTutorial , SignalTutorial , ContextualVar, TodoList , TodoApp ,NgModelTutorial,DynamicStyle ,Directive , Navbar , DynamicRouteHome , Forms , ChildComponent , ChildEmit , AngularLifecycle], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  // whatever  we write here inside class is known as properties 
  //no variabels are declared here
  //eg : name = 'John';
  //eg : name : string = 'John';
  //const name = 'John'; is not allowed here
  //we can declare methods here
  //eg : name(): string { return 'John'; }
  //we can declare properties here
   getName()  { return 'Johnsie'; }
   name = 'John';
  protected title = 'angular-tutorial oh ho ho ';
  date = new Date();

  // Adding a sample value to demonstrate the testPipe usage in the template
  value = 'hello world';


  namesArr:string[]=['','Alice','Bob','Charlie','David'];
  articels:{id:number,name:string,price:number,discount:number}[]=[{id:1,name:'Laptop',price:50000,discount:10},
  {id:2,name:'Phone',price:20000,discount:5},
  {id:3,name:'Tablet',price:15000,discount:7},{id:4,name:'Monitor',price:10000,discount:15}];


  getDataFromChild(data:string[]){
    console.log(data);
  }

  dataVal = 0;
  changeData(){
    this.dataVal++;
  }

  @ViewChild('lifeCycleChild') AngularLifecycle:any;

  constructor(  private productServices : Product){
    afterEveryRender(()=>{
      console.log("afterEveryRender Here 🙋‍♂️ Change In Child Detected");
      
    })

        afterNextRender(()=>{
      console.log(" afterNextRender Here 🙋‍♂️ Next Render Change In Child Detected");
      
    })

    console.log(this.productServices);
    
    

  }

 


}
