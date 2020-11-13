import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router'
import { StorepagesService} from 'src/app/services/storepages/storepages.service'
import { StoreService} from 'src/app/services/store/store.service'
import { FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-editstore',
  templateUrl: './editstore.component.html',
  styleUrls: ['./editstore.component.css']
})
export class EditstoreComponent implements OnInit {
  storeId
  store

  newEditForm = new FormGroup({
    storeName:new FormControl('',Validators.required),
    storeDescription: new FormControl('',Validators.required),
    category:new FormControl('',Validators.required),
  })

  constructor(private router:Router,private route:ActivatedRoute,private storePagesService:StorepagesService,private storeService:StoreService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params=>{this.storeId=params['id']
      this.storeService.getStore(this.storeId).subscribe(
        res=>{
          this.store=res
          this.newEditForm.controls['storeName'].setValue(this.store.storeName)
          this.newEditForm.controls['storeDescription'].setValue(this.store.storeDescription)
          this.newEditForm.controls['category'].setValue(this.store.category)

        
        
        },
        err=>console.log(err))
    
  
    
    },
      err=>{console.log(err)}
    )
  }



  //Gets
  get storeName(){
    return this.newEditForm.get('storeName');
  }

  get storeDescription(){
    return this.newEditForm.get('storeDescription');
  }

  get category(){
    return this.newEditForm.get('storeName');
  }

  updateStore(){
    //console.log(this.newEditForm.value)
    this.storeService.putStore(this.storeId,this.newEditForm.value).subscribe(res=>location.reload())
  }

  
}
