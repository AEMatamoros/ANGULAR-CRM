import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service'

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {
  @Input() product

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }
  delete(){
    this.productService.deleteProduct(this.product['_id']).subscribe(res=>location.reload())
  }

}
