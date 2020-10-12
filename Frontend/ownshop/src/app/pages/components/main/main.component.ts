import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  stores:number[]=[1,2,3,4,5,6]
  data:boolean=true
  constructor() { }

  ngOnInit(): void {
  }

  changeData(){
    if (this.data==false){
        this.data=true
    }else{
        this.data=false
    }
    
  }
}
