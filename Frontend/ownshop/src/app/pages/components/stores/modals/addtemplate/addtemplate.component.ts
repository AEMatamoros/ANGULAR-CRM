import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtemplate',
  templateUrl: './addtemplate.component.html',
  styleUrls: ['./addtemplate.component.css']
})
export class AddtemplateComponent implements OnInit {
  stores:number[]=[1,2,3,4]
  constructor() { }

  ngOnInit(): void {
  }

}
