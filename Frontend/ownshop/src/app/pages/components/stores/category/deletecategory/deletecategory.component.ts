import { Component, Input, OnInit } from '@angular/core';
import { CategoryService} from 'src/app/services/category/category.service'
@Component({
  selector: 'app-deletecategory',
  templateUrl: './deletecategory.component.html',
  styleUrls: ['./deletecategory.component.css']
})
export class DeletecategoryComponent implements OnInit {
  @Input() category
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
  }

  delete(){
    this.categoryService.deleteCategory(this.category['_id']).subscribe(res=>location.reload())
  }

}
