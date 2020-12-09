import { Component, Input, OnInit, ViewChild,ElementRef } from '@angular/core';
import { StorepagesService } from 'src/app/services/storepages/storepages.service'
import { Router } from '@angular/router'
import { PagesComponent} from 'src/app/pages/components/stores/storepages/mypages/pages.component'


@Component({
  selector: 'app-deletetemplate',
  templateUrl: './deletetemplate.component.html',
  styleUrls: ['./deletetemplate.component.css']
})
export class DeletetemplateComponent implements OnInit {
  @Input() page
  @ViewChild('closeAddExpenseModal') closeAddExpenseModal: ElementRef;

  constructor(private storePageService:StorepagesService,private router:Router, private PagesComponent:PagesComponent) { }

  ngOnInit(): void {
  }

  delete(){
    this.storePageService.deleteStorePage(this.page['_id']).subscribe(res=>{
      this.closeAddExpenseModal.nativeElement.click();
      this.PagesComponent.ngOnInit()
    },err=>console.log(err))
  }
}
