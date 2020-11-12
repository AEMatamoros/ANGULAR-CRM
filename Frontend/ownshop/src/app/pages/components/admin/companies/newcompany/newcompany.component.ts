import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms'
import { UserService } from 'src/app/services/user/user.service'
import { CompanyServicesService } from 'src/app/services/company/company.service'

@Component({
  selector: 'app-newcompany',
  templateUrl: './newcompany.component.html',
  styleUrls: ['./newcompany.component.css']
})
export class NewcompanyComponent implements OnInit {
  constructor(private userService:UserService,private companyService:CompanyServicesService) { }
  users
  newCompanyForm= new FormGroup({
    companyName:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    owner:new FormControl('',Validators.required),

  });
  //owner
  ngOnInit(): void {
    
    this.userService.getUsers().subscribe(result=>this.users=result,err=>console.log(err))
  }

  //Gets
  get companyName(){
    return this.newCompanyForm.get('companyName');
  }
  get description(){
    return this.newCompanyForm.get('description');
  }
  get owner(){
    return this.newCompanyForm.get('owner');
  }
  
  

  newCompany(){
    this.companyService.postCompany(this.newCompanyForm.value).subscribe(res=>location.reload(),err=>console.log(err))
  }
}
