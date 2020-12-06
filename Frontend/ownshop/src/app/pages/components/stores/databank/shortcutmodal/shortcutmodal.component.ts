import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shortcutmodal',
  templateUrl: './shortcutmodal.component.html',
  styleUrls: ['./shortcutmodal.component.css']
})
export class ShortcutmodalComponent implements OnInit {
  @Input() element
  constructor() { }

  ngOnInit(): void {
  }

}
