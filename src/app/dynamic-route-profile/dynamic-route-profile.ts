import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamic-route-profile',
  imports: [],
  templateUrl: './dynamic-route-profile.html',
  styleUrl: './dynamic-route-profile.css'
})
export class DynamicRouteProfile {
  userId:number = 0 ;
  userAge:number = 0 ;
  userName:string = "" ;
constructor(private route:ActivatedRoute){}
ngOnInit(){
  this.route.queryParams.subscribe(user=>{
    this.userId=user['userId'];
    this.userAge=user['age'];
    this.userName=user['userName'];
  })
}
}
