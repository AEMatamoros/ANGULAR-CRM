import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { TemplatesService } from 'src/app/services/templates/templates.service'

@Component({
  selector: 'app-templatepreview',
  templateUrl: './templatepreview.component.html',
  styleUrls: ['./templatepreview.component.css']
})

export class TemplatepreviewComponent implements OnInit {
  tempId:string=''
  template:any
  tempManage:any
  isProductTemp:boolean

  constructor(private router:Router,private templateService:TemplatesService, private route:ActivatedRoute) { }
  
  html:string=``
  html2:string=``
  admin:boolean=true
  productTemp:string=`<div class='container alert-success'><div class="row ">
                      <ng-container *ngFor="let store of products">
                      <div class="card m-2 col-md-4 col-lg-3 col-xl-3 col-sm-12 col-xs-12 " style="width: 100%;">
                      <img class="card-img-top" src="assets/img/cover.jpg" alt="Card image cap">
                        <div class="card-body">
                          <h5 class="card-title">OwnShop Product</h5>
                          <p class="card-text">Descripcion del Producto <strong>$999</strong></p>

                          <a [routerLink]="['/editstore']" class="btn btn-warning m-1">Comprar</a>
                        </div>
                      </div>
                    </ng-container>
                    </div>
                    </div>`
  
  products:number[]=[1,2,3]
  //classes:string='alert-success'
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
        this.tempId=params['id']
        this.templateService.getTemplate(this.tempId).subscribe(res=>{
          this.template=res
          if(this.template.html.indexOf('<products>') > -1){
            this.isProductTemp=true
            this.tempManage=this.template.html.split('<products>');
            this.html=`<head><style>${this.template.css}</style></head>`+this.tempManage[0];
            this.html2=this.tempManage[1]
          }else{
            this.html=`<head><style>${this.template.css}</style></head>`+this.template.html
          }
        },
        err=>(console.log(err))
        )
    })
  }


  
}
