import { Component, Input, OnInit } from '@angular/core';
import { PlansServiceService } from 'src/app/services/plans/plans-service.service'

@Component({
  selector: 'app-deleteplan',
  templateUrl: './deleteplan.component.html',
  styleUrls: ['./deleteplan.component.css']
})
export class DeleteplanComponent implements OnInit {
  @Input() plan
  constructor(private plansService:PlansServiceService) { }

  ngOnInit(): void {
  }

  delete(id){
    this.plansService.deletePlan(id).subscribe(result=>{location.reload()},
                                              err=>console.log(err))
  }
}
