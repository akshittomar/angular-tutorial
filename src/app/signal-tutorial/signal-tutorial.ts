import { Component, computed, effect, signal, WritableSignal, Signal } from '@angular/core';

@Component({
  selector: 'app-signal-tutorial',
  imports: [],
  templateUrl: './signal-tutorial.html',
  styleUrl: './signal-tutorial.css'
})
export class SignalTutorial {

  constructor(){
    effect(()=>{
      console.log(this.x);
      console.log();
      console.log(this.val());
    })
  }


differentValue = signal<number | string | boolean >(10);// this is a signal that can hold a number, string, or boolean value
// WritableSignal allows you to change the value of the signal

// can also declare like this differentValue: WritableSignal<number | string | boolean> = signal(10);


data:Signal<number> = computed(()=>200); // This is a computed signal. Its value cannot be changed directly. It is derived from other signals or values.

// This is a computed signal that depends on the value of 'x' and returns 'x + 10'
computedValue: Signal<number> = computed(() => this.val() + 10);

updateDifferentValue(){
if(this.differentValue()==10){
this.differentValue.set("Hello");
}
else if(this.differentValue()=="Hello")
{
  this.differentValue.set(true);
}
else{
  this.differentValue.set(10);
}
}

val = signal(10);
x = 20 ; 

dataUpdate(){
  this.x=this.x + 1 ;
}

signalUpdate(){
  this.val.set(this.val() + 1);
}


}
