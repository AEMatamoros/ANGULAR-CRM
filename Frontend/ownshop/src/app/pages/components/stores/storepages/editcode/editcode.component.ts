import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { StorepagesService } from 'src/app/services/storepages/storepages.service'
import { FormGroup,FormControl,Validators } from '@angular/forms' 

@Component({
  selector: 'app-editcode',
  templateUrl: './editcode.component.html',
  styleUrls: ['./editcode.component.css'], 
})
export class EditcodeComponent implements OnInit {
  pageId
  page
  htmlEditor=true
  cssEditor=false
  jsEditor=false

  editPageForm= new FormGroup({
    pageName:new FormControl('',Validators.required),
    pageType:new FormControl('',Validators.required),
    store:new FormControl('',Validators.required),
    html:new FormControl('',Validators.required),
    css:new FormControl('',Validators.required),
    js:new FormControl('')
    
  })

  constructor(private router:Router, private route:ActivatedRoute, private storePagesService:StorepagesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.pageId=params['id'],
      this.storePagesService.getStorePage(this.pageId).subscribe(res=>{
        this.page=res
        this.editPageForm.controls['html'].setValue(this.page.html),
        this.editPageForm.controls['css'].setValue(this.page.css),
        this.editPageForm.controls['js'].setValue(this.page.js)
        this.editPageForm.controls['pageName'].setValue(this.page.pageName)
        this.editPageForm.controls['pageType'].setValue(this.page.pageType)
        this.editPageForm.controls['store'].setValue(this.page.store)
        //console.log(this.page)
      })
      
    })
  }
  
    
  edit() {
    this.storePagesService.putStorePage(this.pageId,this.editPageForm.value).subscribe(res=>this.router.navigateByUrl(`/editstore/${this.page.store}`))
  }

  //Gets
  get pageName(){
    return this.editPageForm.get('pageName');
  }

  get pageType(){
    return this.editPageForm.get('pageType');
  }

  get html(){
    return this.editPageForm.get('html');
  }

  get css(){
    return this.editPageForm.get('css');
  }

  get js(){
    return this.editPageForm.get('js');
  }

  change(editor){
    console.log(editor)
    if (editor=='html'){
      this.htmlEditor=true
      this.jsEditor=false
      this.cssEditor=false
    }else if(editor=='css'){
      this.cssEditor=true
      this.htmlEditor=false
      this.jsEditor=false
    }else if(editor=='js'){
      this.jsEditor=true
      this.htmlEditor=false
      this.cssEditor=false
    }
  }
}
