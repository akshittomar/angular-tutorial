import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Task {
  task: string;
  status: string;
}

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList implements Task {
  // task : object={ task:"" , status:"todo" };
  task: string = '';
  status: string = '';

  constructor() {}

  todoTask: Task[] = [];

  todoTaskFunc(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    const obj: Task = new TodoList();
    obj.task = val;
    obj.status = 'todo';

    this.todoTask.push(obj);
    localStorage.setItem("todoTask",JSON.stringify(this.todoTask));
  }

  

  

  actionFunc(index:number) {

    const status = this.todoTask[index].status;
    if(status==="todo")
    {
      this.todoTask[index].status="pending" ;
    }
    else if(status==="pending")
    {
      this.todoTask[index].status="complete" ;
    }
    else{
        this.todoTask[index].status="todo" ;
    }

  }
}
