import { Component, Input, OnInit } from '@angular/core';
import { TemplatesService }  from 'src/app/services/templates/templates.service'

@Component({
  selector: 'app-removetemplate',
  templateUrl: './removetemplate.component.html',
  styleUrls: ['./removetemplate.component.css']
})
export class RemovetemplateComponent implements OnInit {
  @Input() template:any
  tempId:string
  constructor(private templateService:TemplatesService) { }

  ngOnInit(): void {
    this.tempId=this.template['id']
  }

  delete(id){
    this.templateService.deleteTemplate(id).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
  }
}
