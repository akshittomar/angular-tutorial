import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  constructor(private route:Router){}
goToAbout(){
this.route.navigate(['/about'],{queryParams:{about:"This is the angular notes page it comes from contact page "}});
}
}
