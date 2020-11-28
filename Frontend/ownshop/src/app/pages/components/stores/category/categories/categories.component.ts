import { Component, Input, OnInit } from '@angular/core';
import { CategoryService  } from 'src/app/services/category/category.service'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @Input() store
  categories
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getStoreCategories(this.store['_id']).subscribe(res=>this.categories=res)
  }

}
