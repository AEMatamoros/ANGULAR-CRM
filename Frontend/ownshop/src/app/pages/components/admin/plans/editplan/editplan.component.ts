import { Component, OnInit, Input,ViewChild, ElementRef } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms'
import { PlansServiceService } from 'src/app/services/plans/plans-service.service'
import { PlansComponent} from 'src/app/pages/components/admin/plans/plans/plans.component'
import { Router} from '@angular/router'

@Component({
  selector: 'app-editplan',
  templateUrl: './editplan.component.html',
  styleUrls: ['./editplan.component.css']
})
export class EditplanComponent implements OnInit {
  @Input() plan

  editPlanForm= new FormGroup({
    name:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    saveData:new FormControl(1,Validators.required),
    host:new FormControl(false,Validators.required),
    templatesNumber:new FormControl(1,Validators.required),
    pagesNumber:new FormControl(1,Validators.required),
    price:new FormControl(0,Validators.required),
    storesNumber:new FormControl(0,Validators.required)
    
  });
  constructor(private planService:PlansServiceService,private router:Router,private plansComponent:PlansComponent ) { }

  @ViewChild('closeAddExpenseModal') closeAddExpenseModal: ElementRef;

  ngOnInit(): void {
    this.editPlanForm.controls['name'].setValue(this.plan.name);
    this.editPlanForm.controls['description'].setValue(this.plan.description);
    this.editPlanForm.controls['price'].setValue(this.plan.price);
    this.editPlanForm.controls['host'].setValue(this.plan.host);
    this.editPlanForm.controls['saveData'].setValue(this.plan.saveData);
    this.editPlanForm.controls['templatesNumber'].setValue(this.plan.templatesNumber);
    this.editPlanForm.controls['pagesNumber'].setValue(this.plan.pagesNumber);
    this.editPlanForm.controls['storesNumber'].setValue(this.plan.pagesNumber);
  }
  //Gets
  get name(){
    return this.editPlanForm.get('name');
  }
  get description(){
    return this.editPlanForm.get('description');
  }
  get host(){
    return this.editPlanForm.get('host');
  }
  get saveData(){
    return this.editPlanForm.get('saveData');
  }
  get price(){
    return this.editPlanForm.get('price');
  }
  get templatesNumber(){
    return this.editPlanForm.get('templatesNumber');
  }
  get pagesNumber(){
    return this.editPlanForm.get('pagesNumber');
  }
  get storesNumber(){
    return this.editPlanForm.get('storesNumber');
  }
  editPlan(){
    this.planService.putPlan(this.plan['_id'],this.editPlanForm.value).subscribe(
      result=>{console.log(result),
        this.closeAddExpenseModal.nativeElement.click()
        this.plansComponent.ngOnInit()
      },
      err=>{console.log(err)}
    )
  }

}
