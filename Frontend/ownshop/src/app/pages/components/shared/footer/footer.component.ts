import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentRoute:string=''
  dataChange:boolean
  constructor(private router: Router) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) { 
        this.currentRoute=this.router.url;
        //console.log(this.currentRoute)
        if(this.currentRoute=='/' || this.currentRoute=='/login' || this.currentRoute=='/register'|| this.currentRoute=='/registerEnterprise'){
          this.dataChange=true
        }else{
          this.dataChange=false
        }
      }
    });}

  ngOnInit(): void {
  }

  
}
