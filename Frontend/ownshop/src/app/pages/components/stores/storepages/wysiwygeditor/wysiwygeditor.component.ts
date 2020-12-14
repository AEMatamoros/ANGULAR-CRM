import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from "@angular/forms"
import { StorepagesService} from 'src/app/services/storepages/storepages.service'
import { Router , ActivatedRoute} from '@angular/router'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { DatabankService } from 'src/app/services/databank/databank.service'
import { AsyncPipe } from '@angular/common';
import { ProductService } from 'src/app/services/product/product.service'
@Component({
  selector: 'app-wysiwygeditor',
  templateUrl: './wysiwygeditor.component.html',
  styleUrls: ['./wysiwygeditor.component.css']
})
export class WYSIWYGEditorComponent implements OnInit {
  store
  elements
  products
  editor = new FormGroup({
    nombreTienda: new FormControl(),
  });

  editorContent: string="Vista Previa"

  newPageForm= new FormGroup({
    pageName:new FormControl('',Validators.required),
    pageType:new FormControl('',Validators.required),
    store:new FormControl(''),
    html:new FormControl(''),
    css:new FormControl(''),
    js:new FormControl('')
    
  })

  constructor(private storePagesService:StorepagesService, private router:Router,private route:ActivatedRoute, private databankService:DatabankService,private productsService:ProductService) { }

  

  ngOnInit(): void {
    this.route.params.subscribe(params=>{this.store=params,console.log(params)
      this.productsService.getStoreProducts(this.store['_id']).subscribe(res=>{this.products=res})
    })
    this.databankService.getBankElements().subscribe(res=>this.elements=res)
  }

  onSubmit(){
    this.preview()
      this.editorContent
      this.newPageForm.controls['store'].setValue(this.store['_id'])
      this.newPageForm.controls['html'].setValue(this.editorContent)
      this.newPageForm.controls['css'].setValue('')
      this.newPageForm.controls['js'].setValue('')
      console.log(this.newPageForm.value)
      this.storePagesService.postStorePage(this.newPageForm.value).subscribe(res=>{this.router.navigateByUrl(`/editstore/${this.store['_id']}`)}
      ,err=>console.log(err))
      
      
  }

  preview(){
    //Init elements for Shortcuts
    var element
    //
    this.editorContent= this.editor.get('nombreTienda').value
     
    let regexp = new RegExp(/{.*?}/);

    while(regexp.test(this.editorContent)){
      let exp= this.editorContent.match(/{.*?}/)
      let expObject= JSON.parse(exp[0])
      
      console.log(expObject)

      if(expObject['tipo']=='imagen'){
        this.elements.forEach(element => {
          if(element.type=='img'){
            if(element['_id']==expObject['imagen']){
              this.editorContent= this.editorContent.replace(exp[0],`
                  <img src="http://127.0.0.1:8888/${element.route}" class="estilo-img img-fluid mb-2" alt="">`)
              console.log(this.editorContent)
            }
          }
        });
       
      }else if(expObject['tipo']=='video'){
        this.elements.forEach(element => {
          if(element.type=='vid'){
            if(element['_id']==expObject['video']){
              this.editorContent= this.editorContent.replace(exp[0],`<video width="100%" height="218" controls class=" border">
              <source src="http://127.0.0.1:8888/${element.route}" type="video/mp4">
              Your browser does not support the video tag.
            </video>`)
              console.log(this.editorContent)
            }
          }
        });
       
      }else if(expObject['tipo']=='pdf'){
        this.elements.forEach(element => {
          if(element.type=='pdf'){
            if(element['_id']==expObject['pdf']){
              this.editorContent= this.editorContent.replace(exp[0],`<a href="http://127.0.0.1:8888/${element.route}" download>Descargar Archivo</a>`)
              console.log(this.editorContent)
            }
          }
        });
      }else if(expObject['tipo']=='rar'){
        this.elements.forEach(element => {
          if(element.type=='rar'){
            if(element['_id']==expObject['rar']){
              this.editorContent= this.editorContent.replace(exp[0],`<a href="http://127.0.0.1:8888/${element.route}" download>Descargar Archivo</a>`)
              console.log(this.editorContent)
            }
          }
        });
      }else if(expObject['tipo']=='other'){
        this.elements.forEach(element => {
          if(element.type=='other'){
            if(element['_id']==expObject['other']){
              this.editorContent= this.editorContent.replace(exp[0],`<a href="http://127.0.0.1:8888/${element.route}" download>Descargar Archivo</a>`)
              console.log(this.editorContent)
            }
          }
        });
      }else if(expObject['tipo']=='productos'){
        var str=""
        str+=`<div class="container-fluid"><div class="row">`
        expObject.productos.forEach(id => {
          this.products.forEach(product => {
            if(product['_id']==id){
              str+=`<div class="card m-2 col-md-4 col-lg-3 col-xl-3 col-sm-12 col-xs-12 p-0 border" style="width: 18rem;">
              <img class="card-img-top" src="http://127.0.0.1:8888/${product.imgRoute}" height="250px" width="100%" alt="Card image cap">
                <div class="card-body ">
                  <h5 class="card-title p-0 m-0">${product.productName}</h5>
                  <p class="card-text p-0 m-0">${product.productDesc} <strong>L${product.price}</strong></p>
                  
                  <a href="/products/${product['_id']}" class="btn btn-warning m-1 center form-control">Comprar</a>
                </div>
              </div>`
            }
          });
          
        });
        str+=`</div></div>`
        this.editorContent= this.editorContent.replace(exp[0],str)
        //console.log(expObject)
      }else if(expObject['tipo']=='galeria'){
        var str=""
        str+=`<div class="container-fluid"><div class="row">`

        expObject['imagenes'].forEach(id => {
          this.elements.forEach(element => {
            if(element['_id']==id){
              str+=`<div class="card m-2 col-md-4 col-lg-3 col-xl-3 col-sm-12 col-xs-12 p-0 border" style="width: 18rem;">
              <img class="card-img-top" src="http://127.0.0.1:8888/${element.route}" height="250px" width="100%" alt="Card image cap">
              </div>`
            }
          });
        });
        str+=`</div></div>`
        this.editorContent= this.editorContent.replace(exp[0],str)
       
      }else if(expObject['tipo']=='producto'){
        var str=""
          this.products.forEach(product => {
            if(product['_id']==(expObject['producto'])){
              str+=`<div class="card m-2 col-md-4 col-lg-3 col-xl-3 col-sm-12 col-xs-12 p-0 border" style="width: 18rem;">
              <img class="card-img-top" src="http://127.0.0.1:8888/${product.imgRoute}" height="250px" width="100%" alt="Card image cap">
                <div class="card-body ">
                  <h5 class="card-title p-0 m-0">${product.productName}</h5>
                  <p class="card-text p-0 m-0">${product.productDesc} <strong>L${product.price}</strong></p>
                  
                  <a href="/products/${product['_id']}" class="btn btn-warning m-1 center form-control">Comprar</a>
                </div>
              </div>`
            }
          });
          
        
        this.editorContent= this.editorContent.replace(exp[0],str)
        //console.log(expObject)
      }
      
    }
     

  }


  //gets
  get pageName(){
    return this.newPageForm.get('pageName');
  }

  get pageType(){
    return this.newPageForm.get('pageType');
  }

}


/*
let cadena = "Esta es una {'tipo':'1','codigo':'123456789'} cadena {2} de mrd {3} papa"

let elements = cadena.match(/{.*?}/)
*/ 

/*
this.editorContent= this.editorContent.replace(exp[0],`
          <img src="http://127.0.0.1:8888/${element.route}" class="estilo-img img-fluid mb-2" alt="">`)
          console.log(this.editorContent)
          */