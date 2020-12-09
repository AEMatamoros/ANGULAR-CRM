import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TemplatesService }  from 'src/app/services/templates/templates.service'
import { TemplatesComponent } from 'src/app/pages/components/admin/templates/templates/templates.component'
@Component({
  selector: 'app-removetemplate',
  templateUrl: './removetemplate.component.html',
  styleUrls: ['./removetemplate.component.css']
})
export class RemovetemplateComponent implements OnInit {
  @Input() template:any
  @ViewChild('closeAddExpenseModal') closeAddExpenseModal: ElementRef;

  tempId:string
  constructor(private templateService:TemplatesService,private TemplatesComponent:TemplatesComponent) { }

  ngOnInit(): void {
    this.tempId=this.template['id']
  }

  delete(id){
    this.templateService.deleteTemplate(id).subscribe(
      res=>{this.TemplatesComponent.ngOnInit(),
      this.closeAddExpenseModal.nativeElement.click();

      },
      err=>console.log(err)
    )
  }
}
