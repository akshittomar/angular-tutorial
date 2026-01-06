import { Component } from '@angular/core';
import { FormControl , ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule],
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

}
