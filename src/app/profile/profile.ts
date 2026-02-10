import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class Profile {
userName:string | null = "";
constructor(private route:ActivatedRoute){}
ngOnInit(){
  //this.userName = this.route.snapshot.paramMap.get('name');
  this.route.params.subscribe(d => this.userName = d['name']);
}

}
