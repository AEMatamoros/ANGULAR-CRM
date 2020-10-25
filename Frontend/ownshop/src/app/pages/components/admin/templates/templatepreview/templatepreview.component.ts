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

  constructor(private router:Router,private templateService:TemplatesService, private route:ActivatedRoute) { }
  
  html:string=`
  <center>
  <h1>My Pagina Web</h1>
  <p>Data</p>
  <a class="btn btn-success">Boton</a>
  </center>
  `
  css:any={
    color:'black', 
  }
  products:number[]=[1,2,3]
  //classes:string='alert-success'
  classes:string=''
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
        this.tempId=params['id']
        this.templateService.getTemplate(this.tempId).subscribe(res=>{
          this.template=res
          this.html=this.template.html
          this.css=JSON.parse(JSON.stringify({"color":'red'})) 
        },
        err=>(console.log(err))
        )
    })
  }


  
}
