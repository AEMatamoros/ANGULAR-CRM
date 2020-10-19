import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from 'src/app/services/auth/auth.service'
import { Router } from '@angular/router';
import { PlansServiceService} from 'src/app/services/plans/plans-service.service'

@Component({
  selector: 'app-register-enterprise',
  templateUrl: './register-enterprise.component.html',
  styleUrls: ['./register-enterprise.component.css']
})
export class RegisterEnterpriseComponent implements OnInit {
  plans:any
  //Form
  registerForm= new FormGroup({
    email:new FormControl('',[Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),Validators.required]),
    password:new FormControl('',Validators.required),
    first_name:new FormControl('',Validators.required),
    last_name:new FormControl('',Validators.required),
    user_type:new FormControl('user'),
    csv:new FormControl('',Validators.required),
    cardNum:new FormControl('',Validators.required),
    plan: new FormControl('',Validators.required),
    companyName:new FormControl('',Validators.required)
  });
  constructor(private authService:AuthService, private router:Router,private plansService:PlansServiceService) { }

  ngOnInit(): void {
    this.plansService.getPlans().subscribe(data=>this.plans=data)
  }

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

  onRegister(): void {
    //console.log(this.registerForm.value)
    this.authService.register(this.registerForm.value).subscribe(res => {
      this.router.navigateByUrl('/main');
      console.log(res)
    });
  }

}
