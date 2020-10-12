import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewpage',
  templateUrl: './viewpage.component.html',
  styleUrls: ['./viewpage.component.css']
})
export class ViewpageComponent implements OnInit {

  constructor() { }
  html:string=`
  <center>
  <h1>My Pagina Web</h1>
  <p>Data</p>
  <a class="btn btn-success">Boton</a>
  </center>
  `
  css:any={
    color:'black',
    
  }
  products:number[]=[1,2,3,4,5,6]
  //classes:string='alert-success'
  classes:string=''
  ngOnInit(): void {
  }

}
