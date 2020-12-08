import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators} from '@angular/forms'
import { PlansServiceService } from 'src/app/services/plans/plans-service.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-newplan',
  templateUrl: './newplan.component.html',
  styleUrls: ['./newplan.component.css']
})
export class NewplanComponent implements OnInit {

  newPlanForm= new FormGroup({
    name:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    saveData:new FormControl(1,Validators.required),
    host:new FormControl(false,Validators.required),
    templatesNumber:new FormControl(1,Validators.required),
    pagesNumber:new FormControl(1,Validators.required),
    price:new FormControl(0,Validators.required),
    storesNumber: new FormControl(0,Validators.required)
  });


  constructor(private plansService:PlansServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  //Gets
  get name(){
    return this.newPlanForm.get('name');
  }
  get description(){
    return this.newPlanForm.get('description');
  }
  get host(){
    return this.newPlanForm.get('host');
  }
  get saveData(){
    return this.newPlanForm.get('saveData');
  }
  get price(){
    return this.newPlanForm.get('price');
  }
  get templatesNumber(){
    return this.newPlanForm.get('templatesNumber');
  }
  get pagesNumber(){
    return this.newPlanForm.get('pagesNumber');
  }
  get storesNumber(){
    return this.newPlanForm.get('storesNumber')
  }

  newPlan(){
    this.plansService.postPlan(this.newPlanForm.value).subscribe(
      result=>{console.log(result)
              location.reload()},
      err=>{console.log(err)})
  }
}
