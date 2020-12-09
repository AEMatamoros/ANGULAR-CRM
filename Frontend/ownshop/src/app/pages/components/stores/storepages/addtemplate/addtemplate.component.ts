import { Component, Input, OnInit,ViewChild, ElementRef } from '@angular/core';
import { TemplatesService } from 'src/app/services/templates/templates.service'
import { StorepagesService} from 'src/app/services/storepages/storepages.service'
import { FormGroup,FormControl,Validators } from '@angular/forms' 
import { PagesComponent} from 'src/app/pages/components/stores/storepages/mypages/pages.component'

@Component({
  selector: 'app-addtemplate',
  templateUrl: './addtemplate.component.html',
  styleUrls: ['./addtemplate.component.css']
})
export class AddtemplateComponent implements OnInit {
  @Input() store
  @ViewChild('closeAddExpenseModal') closeAddExpenseModal: ElementRef;

  
  templates

  newPageForm= new FormGroup({
    tempId:new FormControl('',Validators.required),
    pageName:new FormControl('',Validators.required),
    pageType:new FormControl('',Validators.required),
    store:new FormControl('',Validators.required),
    html:new FormControl('',Validators.required),
    css:new FormControl('',Validators.required),
    js:new FormControl('',Validators.required)
    
  })
  
  constructor(private templateService:TemplatesService,private storePagesService:StorepagesService, private PagesComponent:PagesComponent) { }

  ngOnInit(): void {
    this.templateService.getTemplates().subscribe(res=>this.templates=res)
  }

  //gets
  get pageName(){
    return this.newPageForm.get('pageName');
  }

  get pageType(){
    return this.newPageForm.get('pageType');
  }

  get tempId(){
    return this.newPageForm.get('tempId')
  }
  
  newPage(){
    this.newPageForm.controls['store'].setValue(this.store['_id'])
    this.templates.forEach(template => {
      if(template['_id']==this.newPageForm.controls['tempId'].value){
        this.newPageForm.controls['html'].setValue(template.html)
        this.newPageForm.controls['css'].setValue(template.css)
        this.newPageForm.controls['js'].setValue(template.js)
      }else{
        this.newPageForm.controls['html'].setValue('html')
        this.newPageForm.controls['css'].setValue('css')
        this.newPageForm.controls['js'].setValue('js')
      }
    });
    this.storePagesService.postStorePage(this.newPageForm.value).subscribe(res=>{
      this.closeAddExpenseModal.nativeElement.click();
      this.PagesComponent.ngOnInit()
    },err=>console.log(err))
  }
}
