import { Component, OnInit } from '@angular/core';
import { PlansServiceService } from 'src/app/services/plans/plans-service.service'

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  plans:any
  constructor(private planService:PlansServiceService) { }

  ngOnInit(): void {
    this.planService.getPlans().subscribe(result=>{this.plans=result,console.log(this.plans)},
                                          err=>{console.log(err)})
  }

}
