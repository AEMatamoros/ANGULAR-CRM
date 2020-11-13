import { Component, Input, OnInit } from '@angular/core';
import { StoreService} from 'src/app/services/store/store.service'
import { Router} from '@angular/router'

@Component({
  selector: 'app-deletestore',
  templateUrl: './deletestore.component.html',
  styleUrls: ['./deletestore.component.css']
})
export class DeletestoreComponent implements OnInit {
  @Input() store
  constructor(private storeService: StoreService,private router:Router) { }

  ngOnInit(): void {
  }

  delete(){
    try{
    this.storeService.deleteStore(this.store['_id']).subscribe(res=>{location.reload()})
  }finally{this.router.navigateByUrl('/main')}
  }
}

