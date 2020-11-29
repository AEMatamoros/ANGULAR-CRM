import { Component, OnInit,Input } from '@angular/core';
import { Validators,FormControl,FormGroup } from '@angular/forms'
import { ProductService} from 'src/app/services/product/product.service'
import { CategoryService} from 'src/app/services/category/category.service'

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  @Input() product
  images
  categories

  updateProductForm= new FormGroup({
    productName:new FormControl('',Validators.required),
    productDesc:new FormControl('',Validators.required),
    price:new FormControl('',Validators.required),
    imgRoute:new FormControl('',Validators.required),
    store: new FormControl('',Validators.required),
    category:new FormControl('',Validators.required)
  })
  constructor(private productService:ProductService, private categoryService:CategoryService) { }


  ngOnInit(): void {
    this.updateProductForm.controls['productName'].setValue(this.product.productName)
    this.updateProductForm.controls['productDesc'].setValue(this.product.productDesc)
    this.updateProductForm.controls['store'].setValue(this.product.store)
    this.updateProductForm.controls['price'].setValue(this.product.price)
    this.updateProductForm.controls['category'].setValue(this.product.category)
    this.categoryService.getStoreCategories(this.product.store).subscribe(res=>this.categories= res)
  }

  //gets
  get productName(){
    return this.updateProductForm.get('productName')
  }
  get productDesc(){
    return this.updateProductForm.get('productDesc')
  }
  get price(){
    return this.updateProductForm.get('price')
  }
  get category(){
    return this.updateProductForm.get('category')
  }

  selectImage(event){
    if(event.target.files.length>0){
        const file= event.target.files[0];
        this.images=file;
        //console.log(this.images)
    }
  }

  updateProduct(){
    const formData= new FormData();
    formData.append('file',this.images);
    this.productService.postProductImg(formData).subscribe(res=>{
      this.updateProductForm.controls['imgRoute'].setValue(res.img_route)
      this.productService.putProduct(this.product['_id'],this.updateProductForm.value).subscribe(res=>{
          location.reload()
      })
    })
  }

}
