import { Component } from '@angular/core';
import { TestPipe } from './test-pipe';

@Component({
  selector: 'app-root',
 // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [TestPipe]  // Import the testPipe here to use in the template
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
