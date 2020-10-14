import { Component} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
   title = 'ownshop';
   currentRoute:string='';
   showNav:boolean;
   dataChange:boolean
   admin:boolean=true
   
  constructor(private router: Router) {

    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) { 
        this.currentRoute=this.router.url;
        //console.log(this.currentRoute)
        if(this.currentRoute=='/' || this.currentRoute=='/login' || this.currentRoute=='/register'|| this.currentRoute=='/registerEnterprise'){
          this.showNav=false
        }else{
          this.showNav=true
        }
      }
      //console.log(this.showNav)
    })  ;}
   
   opened: boolean = false;

   toggleSidebar() {
     this.opened = !this.opened;
   }
   
   
   

  
}
