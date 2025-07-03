import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPipe } from './test-pipe';
import { Login } from './login/login';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TestPipe,Login, TestComponent], // Import CommonModule and TestPipe for template usage
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
