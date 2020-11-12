import { Component, Input, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms'
import { Router } from '@angular/router'

import { UserService } from 'src/app/services/user/user.service'
import { PlansServiceService } from 'src/app/services/plans/plans-service.service'
import { CompanyServicesService } from 'src/app/services/company/company.service'

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  @Input() user
  plans:any
  passErr:boolean=false
  //editUserForm
  editUserForm= new FormGroup({
    email:new FormControl('',[Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),Validators.required]),
    first_name:new FormControl('',Validators.required),
    last_name:new FormControl('',Validators.required),
    user_type:new FormControl('',Validators.required),
    csv:new FormControl('',Validators.required),
    cardNum:new FormControl('',Validators.required),
    plan: new FormControl('',Validators.required),
    owner:new FormControl('',Validators.required)
  });
  //CreateCompanyInitData
  company={companyName:'',owner:''}
  userData:any

  constructor(private userService:UserService, private router:Router,private plansService:PlansServiceService,private companyService:CompanyServicesService) { }
  created
  ngOnInit(): void {
    this.plansService.getPlans().subscribe(data=>this.plans=data)
    this.editUserForm.controls['email'].setValue(this.user.email);
    this.editUserForm.controls['first_name'].setValue(this.user.first_name);
    this.editUserForm.controls['last_name'].setValue(this.user.last_name);
    this.editUserForm.controls['csv'].setValue(this.user.csv);
    this.editUserForm.controls['cardNum'].setValue(this.user.cardNum);
    this.editUserForm.controls['plan'].setValue(this.user.plan);
    this.editUserForm.controls['user_type'].setValue(this.user.user_type);
    this.editUserForm.controls['owner'].setValue(this.user.owner);
  }
  //Gets
  get email(){
    return this.editUserForm.get('email');
  }
  get password(){
    return this.editUserForm.get('password');
  }
  get first_name(){
    return this.editUserForm.get('first_name');
  }
  get last_name(){
    return this.editUserForm.get('last_name');
  }
  get user_type(){
    return this.editUserForm.get('user_type');
  }
  get csv(){
    return this.editUserForm.get('csv');
  }
  get cardNum(){
    return this.editUserForm.get('cardNum');
  }

  get companyName(){
    return this.editUserForm.get('companyName')
  }

  get plan(){
    return this.editUserForm.get('plan')
  }

  get owner(){
    return this.editUserForm.get('owner')
  }

   
  update(userId){
    this.userService.putUser(userId,this.editUserForm.value).subscribe(res=>location.reload(),err=>console.log(err))
  }
}
