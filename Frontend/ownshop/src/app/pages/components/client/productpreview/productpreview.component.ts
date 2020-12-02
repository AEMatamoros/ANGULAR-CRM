import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service'
import { StoreService } from 'src/app/services/store/store.service'
import { Router, ActivatedRoute} from '@angular/router'
import { FormGroup, FormControl,Validators } from '@angular/forms'
import { BuysService } from 'src/app/services/buys/buys.service'

@Component({
  selector: 'app-productpreview',
  templateUrl: './productpreview.component.html',
  styleUrls: ['./productpreview.component.css']
})
export class ProductpreviewComponent implements OnInit {
  productId
  product
  store
  cart
  user
  products
  //Date
  today = new Date();
  

  newProductForm= new FormGroup({
    productName:new FormControl('',Validators.required),
    productDesc:new FormControl('',Validators.required),
    price:new FormControl('',Validators.required),
    imgRoute:new FormControl('',Validators.required),
    store: new FormControl('',Validators.required),
    category: new FormControl('',Validators.required),
    units: new FormControl('',Validators.required),
    date: new FormControl('',Validators.required),
    _id:new FormControl('',Validators.required),
  })
  constructor(private productService:ProductService, private route:ActivatedRoute, private storeService:StoreService, private buysService:BuysService) { }

  ngOnInit(): void {
    this.user= JSON.parse( localStorage.getItem('userData') )
    this.route.params.subscribe(params=>{this.productId=params['id']
    this.productService.getProduct(this.productId).subscribe(res=>{this.product=res
      this.storeService.getStore(this.product['store']).subscribe(res=>this.store=res)
    })
    
  })
  }

  //gets
  get productName(){
    return this.newProductForm.get('productName')
  }
  get productDesc(){
    return this.newProductForm.get('productDesc')
  }
  get price(){
    return this.newProductForm.get('price')
  }
  get category(){
    return this.newProductForm.get('category')
  }
  get units(){
    return this.newProductForm.get('units')
  }

  addToCart(){
    this.newProductForm.controls['productName'].setValue(this.product.productName) 
    this.newProductForm.controls['productDesc'].setValue(this.product.productDesc) 
    this.newProductForm.controls['price'].setValue(this.product.price) 
    this.newProductForm.controls['imgRoute'].setValue(this.product.imgRoute) 
    this.newProductForm.controls['store'].setValue(this.product.store) 
    this.newProductForm.controls['category'].setValue(this.product.category) 
    this.newProductForm.controls['_id'].setValue(this.product._id+this.makeid(5)) 

    this.newProductForm.controls['date'].setValue(this.today) 

    if(localStorage.getItem('cart')===null){
      this.cart=[this.newProductForm.value]
      localStorage.setItem('cart',JSON.stringify(this.cart))
    }else{
      this.cart= JSON.parse(localStorage.getItem('cart'))
      this.cart.push(this.newProductForm.value)
      localStorage.setItem('cart',JSON.stringify(this.cart))
    }
    
    
        
  }
  makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 
  
  buy(){
    this.product['units']=1
    this.products=[this.product]
    this.buysService.postBuy({"products":this.products},this.user['_id']).subscribe(res=>console.log(res))
  }
}
