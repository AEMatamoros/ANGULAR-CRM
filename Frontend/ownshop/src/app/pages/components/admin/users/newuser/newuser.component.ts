import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from 'src/app/services/auth/auth.service'
import { Router } from '@angular/router';
import { PlansServiceService} from 'src/app/services/plans/plans-service.service'
import { CompanyServicesService } from 'src/app/services/company/company.service'

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  plans:any
  passErr:boolean=false
  //RegisterForm
  registerForm= new FormGroup({
    email:new FormControl('',[Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),Validators.required]),
    password:new FormControl('',Validators.required),
    first_name:new FormControl('',Validators.required),
    last_name:new FormControl('',Validators.required),
    user_type:new FormControl('',Validators.required),
    csv:new FormControl('',Validators.required),
    cardNum:new FormControl('',Validators.required),
    plan: new FormControl('',Validators.required),
    companyName:new FormControl('',Validators.required),
    owner:new FormControl('',Validators.required)
  });
  //CreateCompanyInitData
  company={companyName:'',owner:''}
  userData:any

  constructor(private authService:AuthService, private router:Router,private plansService:PlansServiceService,private companyService:CompanyServicesService) { }
  created
  ngOnInit(): void {
    this.plansService.getPlans().subscribe(data=>this.plans=data)
  }
  //Gets
  get email(){
    return this.registerForm.get('email');
  }
  get password(){
    return this.registerForm.get('password');
  }
  get first_name(){
    return this.registerForm.get('first_name');
  }
  get last_name(){
    return this.registerForm.get('last_name');
  }
  get user_type(){
    return this.registerForm.get('user_type');
  }
  get csv(){
    return this.registerForm.get('csv');
  }
  get cardNum(){
    return this.registerForm.get('cardNum');
  }

  get companyName(){
    return this.registerForm.get('companyName')
  }

  get plan(){
    return this.registerForm.get('plan')
  }
  get owner(){
    return this.registerForm.get('owner')
  }

  onRegister(): void {
    //Register
    if (this.registerForm.controls['plan'].value=='Free'){
      this.registerForm.controls['companyName'].setValue('');
    }
    this.authService.register(this.registerForm.value).subscribe(res => {
      this.created=res.dataUser
      //CreateCompany
      this.company.companyName=this.registerForm.get('companyName').value;
      this.company.owner=res.dataUser['_id'];
      if (this.registerForm.controls['plan'].value!='Free'){
      this.companyService.postCompany(this.company).subscribe(res=>{
          //Extrar informacion de la empresa
          this.userData=this.created
          this.companyService.getUserCompany(this.userData['_id']).subscribe(
            res=>{this.company=res
            //console.log(res)
            
        
      });
          location.reload()
      })}
      location.reload()
      
      
    },err=>{
      if(err.status==409){
        this.passErr=true
      }
    });
  }


}
