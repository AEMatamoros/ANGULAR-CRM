import { Component, Input, OnInit, ViewChild,ElementRef } from '@angular/core';
import { CompanyServicesService } from 'src/app/services/company/company.service'
import { Router } from '@angular/router'
import { CompaniesComponent} from 'src/app/pages/components/admin/companies/companies/companies.component'

@Component({
  selector: 'app-deletecompany',
  templateUrl: './deletecompany.component.html',
  styleUrls: ['./deletecompany.component.css']
})
export class DeletecompanyComponent implements OnInit {
  @Input() company
  @ViewChild('closeAddExpenseModal') closeAddExpenseModal: ElementRef;

  constructor(private companyService:CompanyServicesService,private companiesComponent :CompaniesComponent) { }

  ngOnInit(): void {
  }

  delete(companyId){
    this.companyService.deleteCompany(companyId).subscribe(res=>{this.closeAddExpenseModal.nativeElement.click(), this.companiesComponent.ngOnInit()},err=>{console.log(err)})
  }

}
