import { Component } from '@angular/core';

@Component({
  selector: 'app-variable-decleration',
  imports: [],
  templateUrl: './variable-decleration.html',
  styleUrl: './variable-decleration.css'
})
export class VariableDecleration {

  // to declare a variable in angular we use the following syntax
  // variableName: dataType = initialValue;
  // Example:
  name: string = 'John'; // Declaring a variable named 'name' of type string and initializing it with 'John'
  age: number = 30; // Declaring a variable named 'age' of type number and initializing it with 30
  isActive: boolean = true; // Declaring a variable named 'isActive' of type boolean and initializing it with true
  hobbies: string[] = ['reading', 'gaming', 'coding']; // Declaring an array of strings named 'hobbies' and initializing it with three hobbies      
  user : object = { // Declaring an object named 'user' with properties 'name' and 'age'
    name: 'John',
    age: 30
  };
  // Declaring a constant named 'PI' of type number and initializing it with the value of pi
  readonly PI: number = 3.14; // 'readonly' means this value cannot be changed after initialization 
  nameFunc(){
      let name = 'John'; // 'let' declares a block-scoped variable named 'name'
      console.log(name); // This will log 'John' to the console
      var age = 30; // 'var' declares a function-scoped variable named 'age'
      console.log(age); // This will log '30' to the console

  }

add(a:number , b : number )  {
  // This method takes two numbers as parameters and returns their sum
  alert(`The sum of ${a} and ${b} is ${a + b}`); // Displays an alert with the sum of a and b
}



}
