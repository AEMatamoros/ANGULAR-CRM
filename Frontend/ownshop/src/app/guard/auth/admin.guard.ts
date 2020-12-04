import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService} from 'src/app/services/auth/auth.service'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  user=JSON.parse(localStorage.getItem('userData'))
  constructor(private authService:AuthService,private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAdmin()
  }
  
  isAdmin(){
    if(this.user.user_type=='admin'){
      return true
    }else{
      this.router.navigateByUrl('/main')
      return false
    }
  }
}
