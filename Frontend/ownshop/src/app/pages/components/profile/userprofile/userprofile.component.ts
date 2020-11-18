import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { FormGroup,FormControl,Validators } from '@angular/forms'

import { UserService } from 'src/app/services/user/user.service'
import { PlansServiceService } from 'src/app/services/plans/plans-service.service'
import { CompanyServicesService } from 'src/app/services/company/company.service'
import { StoreService } from 'src/app/services/store/store.service'

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  user
  constructor(private router:Router,private route:ActivatedRoute,private userService:UserService,private plansService:PlansServiceService,private companyService:CompanyServicesService,private storeService:StoreService) { }
  plans:any
  passErr:boolean=false
  company:any
  userData:any
  stores
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
  

  created
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.company=params
      console.log(this.company)
      this.userService.getUser(this.company.owner).subscribe(result=>{this.user=result
        this.plansService.getPlans().subscribe(data=>this.plans=data)
        this.editUserForm.controls['email'].setValue(this.user.email);
        this.editUserForm.controls['first_name'].setValue(this.user.first_name);
        this.editUserForm.controls['last_name'].setValue(this.user.last_name);
        this.editUserForm.controls['csv'].setValue(this.user.csv);
        this.editUserForm.controls['cardNum'].setValue(this.user.cardNum);
        this.editUserForm.controls['plan'].setValue(this.user.plan);
        this.editUserForm.controls['user_type'].setValue(this.user.user_type);
        this.editUserForm.controls['owner'].setValue(this.user.owner);
      })
      this.storeService.getCompanyStores(this.company['_id']).subscribe(res=>{this.stores=res
    })
    
    })
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
