import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo.html',
  styleUrl: './logo.css'
})
export class Logo {
data:string="";
constructor(private route: ActivatedRoute) {}
ngOnInit() {
  this.route.data.subscribe(d => this.data = d['about']);
}
}



