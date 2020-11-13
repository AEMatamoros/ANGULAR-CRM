import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store/store.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  stores:any
  data:boolean=false
  companyData:any
  constructor(private storeService:StoreService) { }

  ngOnInit(): void {
    this.companyData= JSON.parse(localStorage.getItem('companyData'));
    console.log(this.companyData)
      this.storeService.getCompanyStores(this.companyData['_id']).subscribe(
        res=>{
          this.stores=res
          if(this.stores.length >0)
              this.data=true
         
      }
      )
  }

  
}
