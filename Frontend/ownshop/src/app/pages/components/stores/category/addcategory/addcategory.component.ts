import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { CategoryService } from 'src/app/services/category/category.service'

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  @Input() store
  newPlanForm= new FormGroup({
    name:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    store:new FormControl('',Validators.required),

  });

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.newPlanForm.controls['store'].setValue(this.store['_id'])
  }

  newCat(){
    this.categoryService.postCategory(this.newPlanForm.value).subscribe(res=>location.reload())
  }

  //Gets
  get name(){
    return this.newPlanForm.get('name');
  }
  get description(){
    return this.newPlanForm.get('description');
  }
  //Gets
  
  
}
