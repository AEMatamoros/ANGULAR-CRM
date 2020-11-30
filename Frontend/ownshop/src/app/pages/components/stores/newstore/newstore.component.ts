import { Component, OnInit } from '@angular/core';
import { TemplatesService } from 'src/app/services/templates/templates.service'
import { FormGroup,FormControl,Validators} from '@angular/forms'

import { StoreService } from 'src/app/services/store/store.service'
import { StorepagesService } from 'src/app/services/storepages/storepages.service'

import { Router } from '@angular/router'


@Component({
  selector: 'app-newstore',
  templateUrl: './newstore.component.html',
  styleUrls: ['./newstore.component.css']
})
export class NewstoreComponent implements OnInit {
  templates
  company
  store

  newStoreForm = new FormGroup({
    storeName:new FormControl('',Validators.required),
    storeDescription: new FormControl('',Validators.required),
    category:new FormControl('',Validators.required),
    company:new FormControl('')
  })

  newPageForm = new FormGroup({
    pageName:new FormControl('',Validators.required),
    pageType: new FormControl('',Validators.required),
    store:new FormControl('',Validators.required),
    html:new FormControl(''),
    css:new FormControl(''),
    js:new FormControl('')
  })

  constructor(private templateService:TemplatesService,private StoreService:StoreService,private router:Router,private storePageService:StorepagesService) { }

  ngOnInit(): void {
    this.templateService.getTemplates().subscribe(res=>this.templates=res,err=>console.log(err))
  }


  newStore(tempId){
    this.company=JSON.parse(localStorage.getItem('companyData'))
    this.newStoreForm.controls['company'].setValue(this.company['_id']);

    this.templates.forEach(template => {
      if(template['_id']==tempId){
        this.newPageForm.controls['html'].setValue(template.html);
        this.newPageForm.controls['css'].setValue(template.css);
        this.newPageForm.controls['js'].setValue(template.js);
      }
    });
    
    //console.log(this.newStoreForm.value)
    //console.log(this.newPageForm.value)
    this.StoreService.postStore(this.newStoreForm.value).subscribe(store=>{
      this.store=store
      this.newPageForm.controls['store'].setValue(this.store['_id']);
      this.storePageService.postStorePage(this.newPageForm.value).subscribe(
        res=>{this.router.navigateByUrl('/main')},
        err=>{console.log(err)})
  
    },err=>console.log(err))
  }
  newBlankStore(){
    this.company=JSON.parse(localStorage.getItem('companyData'))
    this.newStoreForm.controls['company'].setValue(this.company['_id']);

    this.newPageForm.controls['html'].setValue('');
    this.newPageForm.controls['css'].setValue('');
    this.newPageForm.controls['js'].setValue('');
    
    //console.log(this.newStoreForm.value)
    //console.log(this.newPageForm.value)
    this.StoreService.postStore(this.newStoreForm.value).subscribe(store=>{
      this.store=store
      this.newPageForm.controls['store'].setValue(this.store['_id']);
      this.storePageService.postStorePage(this.newPageForm.value).subscribe(
        res=>{this.router.navigateByUrl('/main')},
        err=>{console.log(err)})
  
    },err=>console.log(err))
  }
}
