import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
data:string="";
  constructor(private route:ActivatedRoute){}
ngOnInit(){
this.route.queryParams.subscribe(params=>{
  console.log(params);
  this.data=params['about'] ;
})
}
}
