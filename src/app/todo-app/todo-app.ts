import { Component } from '@angular/core';
import {  FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-app',
  imports: [FormsModule],
  templateUrl: './todo-app.html',
  styleUrl: './todo-app.css'
})
export class TodoApp {

  todoList:{task:string,priority:string}[] = [];

  task:string = ""

  addTask(taskVal:string){
    this.todoList.push({task:taskVal , priority:"low"});
    this.task="";
  }

  changePriority(index:number){
    if(this.todoList[index].priority==="low")
    this.todoList[index]={task:this.todoList[index].task , priority:"high"}
  else
    this.todoList[index]={task:this.todoList[index].task , priority:"low"}
  }


removeTask(taskName:string){
this.todoList =   this.todoList.filter((task)=>{ return task.task!==taskName});
}

}

