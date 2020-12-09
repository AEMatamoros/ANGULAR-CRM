import { Component, Input, OnInit , ElementRef, ViewChild} from '@angular/core';
import { FormControl,Validators,FormGroup } from '@angular/forms'
import { UserService } from 'src/app/services/user/user.service'
import { CompanyServicesService } from 'src/app/services/company/company.service'
import { CompaniesComponent} from 'src/app/pages/components/admin/companies/companies/companies.component'

@Component({
  selector: 'app-editcompany',
  templateUrl: './editcompany.component.html',
  styleUrls: ['./editcompany.component.css']
})
export class EditcompanyComponent implements OnInit {
  @Input() company
  @ViewChild('closeAddExpenseModal') closeAddExpenseModal: ElementRef;


  editCompanyForm= new FormGroup({
    companyName:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    owner:new FormControl('',Validators.required),

  });
  constructor(private userService:UserService,private companyService:CompanyServicesService, private companiesComponent:CompaniesComponent) { }
  users
  //owner
  ngOnInit(): void {
    this.editCompanyForm.controls['companyName'].setValue(this.company.companyName);
    this.editCompanyForm.controls['description'].setValue(this.company.description);
    this.editCompanyForm.controls['owner'].setValue(this.company.owner);
    this.userService.getUsers().subscribe(result=>this.users=result,err=>console.log(err))
  }

  //Gets
  get companyName(){
    return this.editCompanyForm.get('companyName');
  }
  get description(){
    return this.editCompanyForm.get('description');
  }
  get owner(){
    return this.editCompanyForm.get('owner');
  }
  
  editcompany(){
    this.companyService.putCompany(this.company['_id'],this.editCompanyForm.value).subscribe(result=>{
    this.closeAddExpenseModal.nativeElement.click(),
    this.companiesComponent.ngOnInit();
    },err=>console.log(err))
  }
}
