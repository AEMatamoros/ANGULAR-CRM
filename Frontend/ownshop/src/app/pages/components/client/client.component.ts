import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { StoreService } from 'src/app/services/store/store.service'


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  user
  stores
  ok
  constructor(private router: Router,private authService:AuthService, private storeService:StoreService ){}

  ngOnInit(): void {
    this.user=JSON.parse(localStorage.getItem('userData')) 
    this.storeService.getStores().subscribe(res=>{this.stores=res
      console.log(this.stores.length)
      if(this.stores.length>0){
        this.ok=true
      }else{
        this.ok=false
      }
    })
  }

  logout(){
    this.authService.logout()
    this.router.navigateByUrl('/');
  }
}
