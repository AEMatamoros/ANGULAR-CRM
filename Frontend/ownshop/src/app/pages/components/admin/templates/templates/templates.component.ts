import { Component, OnInit } from '@angular/core';
import { TemplatesService } from 'src/app/services/templates/templates.service'
@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {

  templates

  constructor(private templateService:TemplatesService) { }

  ngOnInit(): void {
      this.templateService.getTemplates().subscribe(
        res=>(this.templates=res),
        err=>(console.log(err))
      )
  }

}
