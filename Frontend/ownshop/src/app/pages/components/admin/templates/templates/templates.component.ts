import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { TemplatesService } from 'src/app/services/templates/templates.service'
@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {

  templates

  constructor(private templateService:TemplatesService,private router:Router) { }

  ngOnInit(): void {
      this.templateService.getTemplates().subscribe(
        res=>(this.templates=res),
        err=>(console.log(err))
      )
  }



  preview(){
    this.router.navigateByUrl['/login']
  }
}
