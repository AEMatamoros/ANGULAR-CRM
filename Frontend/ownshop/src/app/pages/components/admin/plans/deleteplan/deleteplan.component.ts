import { Component, Input, OnInit,ViewChild,ElementRef } from '@angular/core';
import { PlansServiceService } from 'src/app/services/plans/plans-service.service'
import { PlansComponent } from 'src/app/pages/components/admin/plans/plans/plans.component'

@Component({
  selector: 'app-deleteplan',
  templateUrl: './deleteplan.component.html',
  styleUrls: ['./deleteplan.component.css']
})
export class DeleteplanComponent implements OnInit {
  @Input() plan
  @ViewChild('closeAddExpenseModal') closeAddExpenseModal: ElementRef;

  constructor(private plansService:PlansServiceService, private PlansComponent:PlansComponent) { }

  ngOnInit(): void {
  }

  delete(id){
    this.plansService.deletePlan(id).subscribe(result=>{
    this.closeAddExpenseModal.nativeElement.click();
    this.PlansComponent.ngOnInit();

    },
                                              err=>console.log(err))
  }
}
