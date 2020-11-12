import { Component, OnInit } from '@angular/core';
import {  CompanyServicesService } from 'src/app/services/company/company.service'

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies
  constructor(private companyService:CompanyServicesService) { }

  ngOnInit(): void {
    this.companyService.getCompanys().subscribe(res=>{this.companies=res,console.log(res)},
      err=>console.log(err))
  }

}
