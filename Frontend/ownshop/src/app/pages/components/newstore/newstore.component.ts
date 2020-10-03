import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newstore',
  templateUrl: './newstore.component.html',
  styleUrls: ['./newstore.component.css']
})
export class NewstoreComponent implements OnInit {
  elements:any=[1,2,3,4]
  constructor() { }

  ngOnInit(): void {
  }

}
