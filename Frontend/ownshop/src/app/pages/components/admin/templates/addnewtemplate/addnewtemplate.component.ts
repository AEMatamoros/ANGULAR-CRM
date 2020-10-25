import { Component, OnInit } from '@angular/core';
import { TemplatesService } from 'src/app/services/templates/templates.service'
import { FormControl,FormGroup,Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-addnewtemplate',
  templateUrl: './addnewtemplate.component.html',
  styleUrls: ['./addnewtemplate.component.css']
})
export class AddnewtemplateComponent implements OnInit {

  images:any

  newTemplateForm= new FormGroup({
    templateName:new FormControl('',Validators.required),
    templateDescription:new FormControl('',Validators.required),
    html:new FormControl('',Validators.required),
    css:new FormControl('',Validators.required),
    
  });
  constructor(private templatesService:TemplatesService, private router: Router) { }

  ngOnInit(): void {
  }
  //Gets
  get templateName(){
    return this.newTemplateForm.get('templateName');
  }
  get templateDescription(){
    return this.newTemplateForm.get('templateDescription');
  }
  get html(){
    return this.newTemplateForm.get('html');
  }
  get css(){
    return this.newTemplateForm.get('css');
  }

  selectImage(event){
      if(event.target.files.length>0){
          const file= event.target.files[0];
          this.images=file;
          console.log(this.images)
      }
  }

  onSubmit(){
      const formData= new FormData();
      formData.append('file',this.images);
      console.log(formData)
      /*formData.forEach((value,key) => {
        console.log(key)
        console.log(value)
      });*/
      this.templatesService.postTemplateImg(formData).subscribe(
        res=>{console.log(res.img_route)
          this.newTemplateForm.addControl('img_route', new FormControl(res.img_route))
          console.log(this.newTemplateForm.value)
          this.templatesService.postTemplate(this.newTemplateForm.value).subscribe(
            res=>{console.log(res)
              location.reload()
            },
            err=>{}
      )
        },
        err=>console.log(err))  
    }


}

