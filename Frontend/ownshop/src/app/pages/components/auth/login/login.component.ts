import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from 'src/app/services/auth/auth.service'
import { Router } from '@angular/router';
import { CompanyServicesService } from 'src/app/services/company/company.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData:any
  company:any
  passErr:boolean=false
  //Form
  loginForm= new FormGroup({
    email:new FormControl('',[Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),Validators.required]),
    password:new FormControl('',Validators.required)
  });

  constructor(private authService: AuthService, private router: Router,private companyService:CompanyServicesService) { }

  ngOnInit(): void {
  }

  log(){
    console.log(this.loginForm.value)
  }

  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }

  onLogin(): void {
    this.passErr=false
    this.authService.login(this.loginForm.value).subscribe(res => {
      localStorage.setItem('userData',JSON.stringify(res.dataUser))
      //Extrar informacion de la empresa
      this.userData=JSON.parse(localStorage.getItem('userData'));
      this.companyService.getUserCompany(this.userData['_id']).subscribe(
        res=>{this.company=res
        //console.log(res)
        localStorage.setItem('companyData',JSON.stringify(res))
        
        if(this.userData.user_type!='admin'){
          this.router.navigateByUrl('/main');
        }else{
          this.router.navigateByUrl('/admin');
        }
        
      });
      
      //console.log(res)
    },err=>{
      if(err.status==409){
        this.passErr=true
      }
      /*console.log(err)
      console.log(this.passErr)*/
    });
  }
}
