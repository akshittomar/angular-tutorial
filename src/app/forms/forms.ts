import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl , ReactiveFormsModule , FormGroup , Validator, Validators, FormsModule} from '@angular/forms';
@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule , NgIf , FormsModule ],
  templateUrl: './forms.html',
  styleUrl: './forms.css'
})
export class Forms {
email=new FormControl();
password = new FormControl();


showValue()
  {
alert(this.email.value+" "+this.password.value);
  }
  //------------------FORM GROUP--------------------
  profileForm = new FormGroup({
    name:new FormControl(),
    pass:new FormControl(),
    email:new FormControl()
  })


  onSubmit(){
    console.log(this.profileForm.value);
  }

   profileFormValidation = new FormGroup({
    name:new FormControl('',[Validators.required]),
    pass:new FormControl('',[Validators.required,Validators.minLength(8)]),
    email:new FormControl('',[Validators.email, Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),

  })


  onSubmitValidation(){
    console.log(this.profileFormValidation.value);
  }



  get name()
  {
    return this.profileFormValidation.get('name') ;
  }

  get pass(){
    return this.profileFormValidation.get('pass') ;
  }

  get mail(){
    return this.profileFormValidation.get('email') ;
  }

  userName="";
  userAge=0;
  userCountry="";
  userRange=0;

templateSubmit(formVal : any){
console.log(formVal);
this.userName=formVal.userName;
this.userAge=formVal.age;
this.userCountry=formVal.country;
this.userRange=formVal.range;
}

onTempValidation(formVal:any){
  console.log(formVal);
}
}
