import { Component, Input, OnInit } from '@angular/core';
import { StorepagesService } from 'src/app/services/storepages/storepages.service'

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  @Input() store
  pages
  constructor(private storePagesService:StorepagesService) { }

  ngOnInit(): void {
    //console.log(this.store)
    this.storePagesService.getStorePages(this.store['_id']).subscribe(res=>this.pages=res)
  }

}
