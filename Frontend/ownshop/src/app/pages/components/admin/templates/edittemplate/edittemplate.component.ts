import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { TemplatesService } from 'src/app/services/templates/templates.service'
import { FormControl, FormGroup,Validators } from '@angular/forms'

@Component({
  selector: 'app-edittemplate',
  templateUrl: './edittemplate.component.html',
  styleUrls: ['./edittemplate.component.css']
})
export class EdittemplateComponent implements OnInit {

  constructor(private router:Router,private templateService:TemplatesService, private route:ActivatedRoute) { }
  tempId
  template
  isProductTemp
  tempManage
  html1
  html2
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


  editTemplateForm= new FormGroup({
    html:new FormControl(''),
    css:new FormControl(''),
    js:new FormControl(''),
  });

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
        this.tempId=params['id']
        this.templateService.getTemplate(this.tempId).subscribe(res=>{
          this.template=res
          this.editTemplateForm.controls['html'].setValue(this.template.html);
          this.editTemplateForm.controls['css'].setValue(this.template.css);
          this.editTemplateForm.controls['js'].setValue(this.template.js);


        },
        err=>(console.log(err))
        )
    })
  }

  //Gets
  get html(){
    return this.editTemplateForm.get('html').value;
  }
  get css(){
    return this.editTemplateForm.get('css');
  }
  get js(){
    return this.editTemplateForm.get('js');
  }

  //guardarCambios
  guardar(){
    console.log(this.editTemplateForm.value)
    this.templateService.putTemplate(this.template['_id'],this.editTemplateForm.value).subscribe(
      res=>{this.router.navigateByUrl('/admin/templates'),console.log(res)},
      err=>console.log(err))
    
  }
}
