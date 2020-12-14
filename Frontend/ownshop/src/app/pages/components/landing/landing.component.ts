import { Component, OnInit } from '@angular/core';
import { PlansServiceService} from 'src/app/services/plans/plans-service.service'
import { AuthService } from 'src/app/services/auth/auth.service'


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  //Init
  plans:any
  constructor(private plansService:PlansServiceService) { }
  
  ngOnInit(): void {
    this.plansService.getPlans().subscribe(data=>this.plans=data)
  }

}
