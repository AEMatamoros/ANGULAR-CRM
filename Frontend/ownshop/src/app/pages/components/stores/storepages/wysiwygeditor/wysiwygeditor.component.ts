import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from "@angular/forms"
import { StorepagesService} from 'src/app/services/storepages/storepages.service'
import { Router , ActivatedRoute} from '@angular/router'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-wysiwygeditor',
  templateUrl: './wysiwygeditor.component.html',
  styleUrls: ['./wysiwygeditor.component.css']
})
export class WYSIWYGEditorComponent implements OnInit {
  store
  editor = new FormGroup({
    nombreTienda: new FormControl(),
  });

  editorContent: string="Vista Previa"

  newPageForm= new FormGroup({
    pageName:new FormControl('',Validators.required),
    pageType:new FormControl('',Validators.required),
    store:new FormControl('',Validators.required),
    html:new FormControl('',Validators.required),
    css:new FormControl('',Validators.required),
    js:new FormControl('',Validators.required)
    
  })

  constructor(private storePagesService:StorepagesService, private router:Router,private route:ActivatedRoute) { }

  

  ngOnInit(): void {
    this.route.params.subscribe(params=>{this.store=params,console.log(params)})
  }

  onSubmit(){
      this.editorContent= this.editor.get('nombreTienda').value
      this.newPageForm.controls['store'].setValue(this.store['_id'])
      this.newPageForm.controls['html'].setValue(this.editorContent)
      this.newPageForm.controls['css'].setValue('')
      this.newPageForm.controls['js'].setValue('')
      console.log(this.newPageForm.value)
      this.storePagesService.postStorePage(this.newPageForm.value).subscribe(res=>{this.router.navigateByUrl(`/editstore/${this.store['_id']}`)}
      ,err=>console.log(err))
      
      
  }

  preview(){
     this.editorContent= this.editor.get('nombreTienda').value

     
     let exp= this.editorContent.match(/{.*?}/)
     console.log(exp[0])
     /*while(this.editorContent.match(/{.*?}/)){
        
     }*/
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