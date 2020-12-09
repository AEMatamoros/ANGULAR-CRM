import { Component, Input, OnInit,ViewChild,ElementRef } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service'
import { ProductsComponent} from 'src/app/pages/components/stores/storeproducts/products/products.component'


@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {
  @Input() product
  @ViewChild('closeAddExpenseModal') closeAddExpenseModal: ElementRef;


  constructor(private productService:ProductService, private ProductsComponent:ProductsComponent) { }

  ngOnInit(): void {
  }
  delete(){
    this.productService.deleteProduct(this.product['_id']).subscribe(res=>{
      this.closeAddExpenseModal.nativeElement.click();
        this.ProductsComponent.ngOnInit()
    })
  }

}
