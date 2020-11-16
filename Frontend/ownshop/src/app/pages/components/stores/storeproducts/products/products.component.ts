import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() store
  products
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getStoreProducts(this.store['_id']).subscribe(res=>this.products=res)
  }

}
