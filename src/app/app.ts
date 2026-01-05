import { Component } from '@angular/core';
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





@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, TestPipe,Login, TestComponent , VariableDecleration , Counter , EnentTutorial , AppStyleTutorial , IfElseTutorial, SwitchCaseTutorial , ForLoopTutorial , SignalTutorial , ContextualVar, TodoList , TodoApp ,NgModelTutorial,DynamicStyle ,Directive , Navbar , DynamicRouteHome ], 
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

  // Adding a sample value to demonstrate the testPipe usage in the template
  value = 'hello world';
}
