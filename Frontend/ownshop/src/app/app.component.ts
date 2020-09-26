import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
   title = 'ownshop';
   currentRoute:string='';
   showNav:boolean;
   
   constructor(private router: Router) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) { 
        this.currentRoute=this.router.url;
        console.log(this.currentRoute)
        if(this.currentRoute=='/' || this.currentRoute=='/login' || this.currentRoute=='/register'|| this.currentRoute=='/registerEnterprise'){
          this.showNav=false
        }else{
          this.showNav=true
        }
      }
    });}
   
   opened: boolean = false;

   toggleSidebar() {
     this.opened = !this.opened;
   }
   
   
   

  
}
