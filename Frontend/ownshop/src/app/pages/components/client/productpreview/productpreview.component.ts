import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service'
import { StoreService } from 'src/app/services/store/store.service'
import { Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-productpreview',
  templateUrl: './productpreview.component.html',
  styleUrls: ['./productpreview.component.css']
})
export class ProductpreviewComponent implements OnInit {
  productId
  product
  store
  constructor(private productService:ProductService, private route:ActivatedRoute, private storeService:StoreService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{this.productId=params['id']
    this.productService.getProduct(this.productId).subscribe(res=>{this.product=res
      this.storeService.getStore(this.product['store']).subscribe(res=>this.store=res)
    })
    
  })
  }

}
