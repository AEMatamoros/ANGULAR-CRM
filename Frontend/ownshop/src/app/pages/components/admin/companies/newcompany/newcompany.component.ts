import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms'
import { UserService } from 'src/app/services/user/user.service'
import { CompanyServicesService } from 'src/app/services/company/company.service'
import { CompaniesComponent } from 'src/app/pages/components/admin/companies/companies/companies.component'

@Component({
  selector: 'app-newcompany',
  templateUrl: './newcompany.component.html',
  styleUrls: ['./newcompany.component.css']
})
export class NewcompanyComponent implements OnInit {
  constructor(private userService:UserService,private companyService:CompanyServicesService,private companiesComp:CompaniesComponent) { }
  users

  @ViewChild('closeAddExpenseModal') closeAddExpenseModal: ElementRef;

  newCompanyForm= new FormGroup({
    companyName:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    owner:new FormControl('',Validators.required),

  });
  //owner
  ngOnInit(): void {
    
    this.callData()
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
    this.companyService.postCompany(this.newCompanyForm.value).subscribe(res=>{
      this.closeAddExpenseModal.nativeElement.click()
      this.callData(),
      this.companiesComp.ngOnInit()}
      ,err=>console.log(err))
  }

  callData(){
    this.userService.getUsers().subscribe(result=>this.users=result,err=>console.log(err))
  }
}
