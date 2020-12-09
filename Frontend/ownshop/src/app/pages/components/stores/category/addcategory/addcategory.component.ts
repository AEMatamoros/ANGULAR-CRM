import { Component, Input, OnInit, ViewChild,ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { CategoryService } from 'src/app/services/category/category.service'
import { CategoriesComponent} from 'src/app/pages/components/stores/category/categories/categories.component'

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  @Input() store
  @ViewChild('closeAddExpenseModal') closeAddExpenseModal: ElementRef;

  newPlanForm= new FormGroup({
    name:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    store:new FormControl('',Validators.required),

  });

  constructor(private categoryService:CategoryService, private categoriesComponent:CategoriesComponent) { }

  ngOnInit(): void {
    this.newPlanForm.controls['store'].setValue(this.store['_id'])
  }

  newCat(){
    this.categoryService.postCategory(this.newPlanForm.value).subscribe(res=>{
      this.closeAddExpenseModal.nativeElement.click();
      this.categoriesComponent.ngOnInit()
    })
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
