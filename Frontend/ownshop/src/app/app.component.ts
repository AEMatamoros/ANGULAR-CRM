import { Component} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
   title = 'Ownshop';
   currentRoute:string='';
   showNav:boolean;
   dataChange:boolean
   admin:boolean=true
   companyData:any
   userData:any
   
  constructor(private router: Router,private authService:AuthService, ) {
    //Mostrar barra lateral
    this.router.events.subscribe((ev) => {
      this.userData= JSON.parse(localStorage.getItem('userData')); 
      this.companyData= JSON.parse(localStorage.getItem('companyData')); 
      if (ev instanceof NavigationEnd) { 
        this.currentRoute=this.router.url;
        //console.log(this.currentRoute)
        if(this.currentRoute=='/' || this.currentRoute=='/login' || this.currentRoute=='/register'|| this.currentRoute=='/client'|| this.currentRoute=='/registerEnterprise' || this.currentRoute.includes('/templatepreview')|| this.currentRoute.includes("/storepage")){
          this.showNav=false
          console.log(this.currentRoute)
        }else{
          this.showNav=true
          console.log(this.currentRoute)
        }
      }

    


    })  ;
  
    
  
  }
   
   opened: boolean = false;

   toggleSidebar() {
     this.opened = !this.opened;
   }
   
   logout(){
     this.authService.logout()
     this.router.navigateByUrl('/');
   }
   

  
}
