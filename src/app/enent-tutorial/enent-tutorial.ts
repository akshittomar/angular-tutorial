import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'event-tutorial',
  imports: [CommonModule],
  templateUrl: './enent-tutorial.html',
  styleUrls: ['./enent-tutorial.css']  // Fix property name from styleUrl to styleUrls
})
export class EnentTutorial {

  // Alert the value passed from the template reference variable
  showValue(val: string) {
    alert(val);
  }

  // Alert the city value passed from the template reference variable
  showCity(val: string) {
    alert('City value: ' + val);
  }

  // Alert various properties of the input element passed from the template reference variable
  showInputProps(input: HTMLInputElement) {
    alert(
      'Value: ' + input.value + '\\n' +
      'Type: ' + input.type + '\\n' +
      'Placeholder: ' + input.placeholder + '\\n' +
      'Disabled: ' + input.disabled + '\\n' +
      'ID: ' + input.id + '\\n' +
      'Name: ' + input.name
    );
  }

message(){
  alert("I am click event ");
}


mouseEnter(event:MouseEvent){
  console.log("MOUSE ENTER TRIGGERED ",event.type," on element: ", event.target);
}
mouseLeave(event:MouseEvent)
{
  console.log("Mouse Leave Event ",event.type," on element: ", event.target);
}
mouseOver(event:MouseEvent)
{
  console.log("Mouse Over Event",event.type," on element: ", event.target);
}

handleTextInput(event: Event) {
  // To access the value:
  const input = event.target as HTMLTextAreaElement;
  console.log("Text Input Event",event.type," value is :",input.value);
}

eventDetails(event:any){
console.log(event);
console.log(event.target); // This will log the target element as a string
console.log(event.target.name); // This will log the name attribute of the button
console.log(event.target.id); // This will log the id attribute of the button
console.log(event.type); // This will log the type of the event, e.g., 'click'
  //alert(`Event Type: ${event.type}, Target Name: ${event.target.name}, Target : ${event.target}`);
  // This will display an alert with the event type and target name
  // You can also access other properties of the event object as needed
  // For example, you can access the target element's attributes, styles, etc.
  // Example: console.log(event.target.style); // This will log the styles of the target element
  // Example: console.log(event.target.className); // This will log the class names of the target element




}
inputValue:string = "";
// Event handler for input change event
onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    // You can access the input value like this:
    this.inputValue = input.value;
  console.log('Input change event:', input.value);
}

inputChangeValue:string = "";
onInputChangeFunc(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.inputChangeValue= input.value;
    // You can access the input value like this:
  console.log('Input change event:', input.value);
}

userName:string = '';
showUserName = "";

storingName(event:Event){
const input = event.target as HTMLInputElement ;
this.userName = input.value ;

}


setUserName(event:MouseEvent){

this.showUserName = '';
alert("UserName Set Successful !!! ");
console.log("UserName Set Successful !!! ",this.userName);

}




getUserName(){

  
this.showUserName = this.userName ; 
console.log("UserName is : ",this.showUserName);
}

}
