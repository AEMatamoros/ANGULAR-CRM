import { Component, Input, OnInit } from '@angular/core';
import { TemplatesService } from 'src/app/services/templates/templates.service'
import { StorepagesService} from 'src/app/services/storepages/storepages.service'
import { FormGroup,FormControl,Validators } from '@angular/forms' 

@Component({
  selector: 'app-addtemplate',
  templateUrl: './addtemplate.component.html',
  styleUrls: ['./addtemplate.component.css']
})
export class AddtemplateComponent implements OnInit {
  @Input() store
  
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
  
  constructor(private templateService:TemplatesService,private storePagesService:StorepagesService) { }

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
      }
    });
    this.storePagesService.postStorePage(this.newPageForm.value).subscribe(res=>location.reload(),err=>console.log(err))
  }
}
