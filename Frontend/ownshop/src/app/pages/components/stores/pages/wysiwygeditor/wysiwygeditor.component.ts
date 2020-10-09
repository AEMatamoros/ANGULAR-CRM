import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from "@angular/forms"

@Component({
  selector: 'app-wysiwygeditor',
  templateUrl: './wysiwygeditor.component.html',
  styleUrls: ['./wysiwygeditor.component.css']
})
export class WYSIWYGEditorComponent implements OnInit {
  
  editor = new FormGroup({
    nombreTienda: new FormControl(),
  });

  editorContent: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
      //console.log(this.editor.get('nombreTienda').value)
      this.editorContent= this.editor.get('nombreTienda').value
  }

}
