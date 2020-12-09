import { Component, Input, OnInit,ViewChild, ElementRef } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms'
import { CategoryService } from 'src/app/services/category/category.service'
import { CategoriesComponent} from 'src/app/pages/components/stores/category/categories/categories.component'
@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css']
})
export class EditcategoryComponent implements OnInit {
  @Input() category
  @ViewChild('closeAddExpenseModal') closeAddExpenseModal: ElementRef;

  constructor(private categoryService:CategoryService, private categoriesComponent:CategoriesComponent) { }
  editPlanForm= new FormGroup({
    name:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    store:new FormControl('',Validators.required),

  });

  ngOnInit(): void {
    this.editPlanForm.controls['store'].setValue(this.category['store']);
    this.editPlanForm.controls['name'].setValue(this.category['name']);
    this.editPlanForm.controls['description'].setValue(this.category['description'])
  }

  //Gets
  get name(){
    return this.editPlanForm.get('name');
  }
  get description(){
    return this.editPlanForm.get('description');
  }

  editCat(){
    this.categoryService.putCategory(this.category['_id'],this.editPlanForm.value).subscribe(res=>{
      this.closeAddExpenseModal.nativeElement.click();
      this.categoriesComponent.ngOnInit()
    })
  }

}
