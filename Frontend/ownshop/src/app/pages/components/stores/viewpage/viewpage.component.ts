import { Component, OnInit } from '@angular/core';
import { StorepagesService} from 'src/app/services/storepages/storepages.service'
import { Router, ActivatedRoute} from '@angular/router'
import { ProductService }  from 'src/app/services/product/product.service'
@Component({
  selector: 'app-viewpage',
  templateUrl: './viewpage.component.html',
  styleUrls: ['./viewpage.component.css']
})
export class ViewpageComponent implements OnInit {
  storeId
  pages
  tempManage
  html:string
  html2:string
  isProductTemp:boolean
  products
  constructor(private storePageService:StorepagesService, private router:Router,private route:ActivatedRoute, private productService:ProductService) { }
 
  ngOnInit():void{
    this.route.params.subscribe(params=>{
      this.storeId=params.id
      this.storePageService.getStorePages(this.storeId).subscribe(res=>{this.pages=res
      this.pages.forEach(page => {
        if(page.pageType=='main'){
          if(page.html.indexOf('<products>') > -1){
            this.isProductTemp=true
            this.tempManage=page.html.split('<products>');
            this.html=`<head><style>${page.css}</style></head>`+this.tempManage[0];
            this.html2=this.tempManage[1]
            this.isProductTemp=true
          }else{
            this.html=`<head><style>${page.css}</style></head>`+this.pages[0].html
            this.html2=""
            this.isProductTemp=false
          }
    

        }
      });
     
      this.productService.getStoreProducts(this.storeId).subscribe(res=>{
        this.products=res
        //console.log(this.products)
      })
      })
    })

    
  }

  changePage(i){
    if(this.pages[i].html.indexOf('<products>') > -1){
      this.isProductTemp=true
      this.tempManage=this.pages[i].html.split('<products>');
      this.html=`<head><style>${this.pages[i].css}</style></head>`+this.tempManage[0];
      this.html2=this.tempManage[1]
      this.isProductTemp=true
    }else{
      this.html=`<head><style>${this.pages[i].css}</style></head>`+this.pages[i].html
      this.html2=""
      this.isProductTemp=false
    }
    console.log(this.products)
    //console.log(this.html)
    //console.log(this.html2)
  }

}
