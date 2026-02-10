import { Component } from '@angular/core';
@Component({
    selector : "test-comp",imports:[],
templateUrl:"./test.component.html",
styleUrl:"./test.component.css"})

class TestComponent {

helloWorld(){
    alert("Hello World");
}

}

export {TestComponent};