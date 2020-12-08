import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store/store.service'
import { PlansServiceService } from 'src/app/services/plans/plans-service.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  stores:any
  data:boolean=false
  companyData:any
  user
  myPlan
  maxStores:boolean=false
  constructor(private storeService:StoreService,private plansService: PlansServiceService) { }

  ngOnInit(): void {
    this.companyData= JSON.parse(localStorage.getItem('companyData'));
    this.user = JSON.parse(localStorage.getItem('userData'));
    this.plansService.getPlans().subscribe(plans=>{
      plans.forEach(plan => {
        if(plan.name==this.user.plan){
          this.myPlan=plan
          this.storeService.getCompanyStores( this.companyData['_id']).subscribe(res=>{
            this.stores=res
            if(this.stores.length >0){this.data=true}
            if(this.stores.length >= this.myPlan.storesNumber){this.maxStores=true}
        })
        }
        

      });
    })
      
  }

  
}
