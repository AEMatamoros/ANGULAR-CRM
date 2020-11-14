import { Component, Input, OnInit } from '@angular/core';
import { StorepagesService } from 'src/app/services/storepages/storepages.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-deletetemplate',
  templateUrl: './deletetemplate.component.html',
  styleUrls: ['./deletetemplate.component.css']
})
export class DeletetemplateComponent implements OnInit {
  @Input() page
  constructor(private storePageService:StorepagesService,private router:Router) { }

  ngOnInit(): void {
  }

  delete(){
    this.storePageService.deleteStorePage(this.page['_id']).subscribe(res=>location.reload(),err=>console.log(err))
  }
}
