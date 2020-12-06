import { Component, Input, OnInit } from '@angular/core';
import { StorepagesService } from 'src/app/services/storepages/storepages.service'
import { PlansServiceService } from 'src/app/services/plans/plans-service.service'

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  @Input() store
  pages
  user
  myPlan
  maxPages:boolean=false
  constructor(private storePagesService:StorepagesService,private plansService: PlansServiceService) { }

  ngOnInit(): void {
    
    this.storePagesService.getStorePages(this.store['_id']).subscribe(res=>{
      this.pages=res
      this.plansService.getPlans().subscribe(plans=>{
        this.user =JSON.parse(localStorage.getItem('userData')) 

        plans.forEach(plan => {
          if(plan.name==this.user.plan){
            this.myPlan=plan
          }
        });
        
        if(this.myPlan.pagesNumber<=this.pages.length){
          this.maxPages=true
          
        }
        //console.log(this.maxPages)
         
      })
    
    })
    

  }

}
