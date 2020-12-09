import { Component, Input, OnInit,ViewChild,ElementRef } from '@angular/core';
import { CategoryService} from 'src/app/services/category/category.service'
import { CategoriesComponent} from 'src/app/pages/components/stores/category/categories/categories.component'

@Component({
  selector: 'app-deletecategory',
  templateUrl: './deletecategory.component.html',
  styleUrls: ['./deletecategory.component.css']
})
export class DeletecategoryComponent implements OnInit {
  @Input() category
  @ViewChild('closeAddExpenseModal') closeAddExpenseModal: ElementRef;

  constructor(private categoryService:CategoryService, private categoriesComponent:CategoriesComponent) { }

  ngOnInit(): void {
  }

  delete(){
    this.categoryService.deleteCategory(this.category['_id']).subscribe(res=>{
      this.closeAddExpenseModal.nativeElement.click();
      this.categoriesComponent.ngOnInit()
    })
  }

}
