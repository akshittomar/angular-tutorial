import { Component } from '@angular/core';
import {  Router } from '@angular/router';

import { NgFor } from '@angular/common';

@Component({
  selector: 'app-dynamic-route-home',
  imports: [  NgFor],
  templateUrl: './dynamic-route-home.html',
  styleUrl: './dynamic-route-home.css'
})
export class DynamicRouteHome {


constructor(private route : Router){}

users=[{
  userName:"Martin",age:24,id:1
},{
  userName:"Peter",age:25,id:2
},{
  userName:"Ronny",age:26,id:3
}] ;

openProfile(user:any){
  this.route.navigate(['/dynamicProfile'],{queryParams:{userId:user.id, userName:user.userName, age:user.age}})
}



}
