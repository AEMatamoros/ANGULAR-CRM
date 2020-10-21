import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store/store.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  stores:any
  data:boolean
  companyData:any
  constructor(private storeService:StoreService) { }

  ngOnInit(): void {
    this.companyData= JSON.parse(localStorage.getItem('companyData'));
      this.storeService.getCompanyStores(this.companyData['_id']).subscribe(
        res=>{
          this.stores=res
          if(res){
            this.data=true
          }else{
            this.data=false
          }
      }
      )
  }

  changeData(){
    if (this.data==false){
        this.data=true
    }else{
        this.data=false
    }
    
  }
}
