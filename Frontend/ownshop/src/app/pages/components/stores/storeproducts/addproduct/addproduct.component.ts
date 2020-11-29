import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ProductService } from 'src/app/services/product/product.service'
import { CategoryService} from 'src/app/services/category/category.service'

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  @Input() store
  images
  categories 

  newProductForm= new FormGroup({
    productName:new FormControl('',Validators.required),
    productDesc:new FormControl('',Validators.required),
    price:new FormControl('',Validators.required),
    imgRoute:new FormControl('',Validators.required),
    store: new FormControl('',Validators.required),
    category: new FormControl('',Validators.required)
  })
  constructor(private productService:ProductService, private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getStoreCategories(this.store['_id']).subscribe(res=>this.categories=res)
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
  
  selectImage(event){
    if(event.target.files.length>0){
        const file= event.target.files[0];
        this.images=file;
        console.log(this.images)
    }
}

  newProduct(){
    const formData= new FormData();
      formData.append('file',this.images);
      //console.log(formData)
      /*formData.forEach((value,key) => {
        console.log(key)
        console.log(value)
      });*/
      this.productService.postProductImg(formData).subscribe(res=>{
        this.newProductForm.controls['imgRoute'].setValue(res.img_route)
        this.newProductForm.controls['store'].setValue(this.store['_id'])
        this.productService.postProduct(this.newProductForm.value).subscribe(res=>location.reload())
      })
    
  }
}
