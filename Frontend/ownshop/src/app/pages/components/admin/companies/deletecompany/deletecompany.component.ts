import { Component, Input, OnInit } from '@angular/core';
import { CompanyServicesService } from 'src/app/services/company/company.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-deletecompany',
  templateUrl: './deletecompany.component.html',
  styleUrls: ['./deletecompany.component.css']
})
export class DeletecompanyComponent implements OnInit {
  @Input() company
  constructor(private companyService:CompanyServicesService) { }

  ngOnInit(): void {
  }

  delete(companyId){
    this.companyService.deleteCompany(companyId).subscribe(res=>{location.reload()},err=>{console.log(err)})
  }

}
