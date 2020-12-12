import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router'
import { StorepagesService} from 'src/app/services/storepages/storepages.service'
import { StoreService} from 'src/app/services/store/store.service'
import { FormGroup,FormControl,Validators} from '@angular/forms'
import { SharedService } from 'src/app/services/shared/shared.service'

@Component({
  selector: 'app-editstore',
  templateUrl: './editstore.component.html',
  styleUrls: ['./editstore.component.css']
})
export class EditstoreComponent implements OnInit {
  storeId
  store
  shareds
  showHTMLHeader=true
  ShowCSSHeader=false
  ShowHTMLFooter=false
  ShowCSSFooter=false

  newEditForm = new FormGroup({
    storeName:new FormControl('',Validators.required),
    storeDescription: new FormControl('',Validators.required),
    category:new FormControl('',Validators.required),
  })

  sharedForm = new FormGroup({
    htmlH: new FormControl(''),
    cssH: new FormControl(''),
    htmlF: new FormControl(''),
    cssF:new FormControl(''),
    storeId: new FormControl('')
  })

  sharedFormUpdate = new FormGroup({
    htmlH: new FormControl(''),
    cssH: new FormControl(''),
    htmlF: new FormControl(''),
    cssF:new FormControl(''),
    storeId: new FormControl('')
  })

  constructor(private router:Router,private route:ActivatedRoute,private storePagesService:StorepagesService,private storeService:StoreService, private sharedService:SharedService) { }

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
       this.sharedService.getStoreShared(this.storeId).subscribe(res=>{this.shareds=res,
         this.sharedFormUpdate.controls['htmlH'].setValue(this.shareds.htmlH)
         this.sharedFormUpdate.controls['htmlF'].setValue(this.shareds.htmlF)
         this.sharedFormUpdate.controls['cssH'].setValue(this.shareds.cssH)
         this.sharedFormUpdate.controls['cssF'].setValue(this.shareds.cssF)
         this.sharedFormUpdate.controls['storeId'].setValue(this.shareds.storeId)

        })
  
    
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

  change(show){
    if(show=='htmlF'){
      this.ShowHTMLFooter=true
      this.showHTMLHeader=false
      this.ShowCSSFooter=false
      this.ShowCSSHeader=false
    }else if(show=='htmlH'){
      this.ShowHTMLFooter=false
      this.showHTMLHeader=true
      this.ShowCSSFooter=false
      this.ShowCSSHeader=false
    }else if(show=='cssF'){
      this.ShowHTMLFooter=false
      this.showHTMLHeader=false
      this.ShowCSSFooter=true
      this.ShowCSSHeader=false
    }else if(show=='cssH'){
      this.ShowHTMLFooter=false
      this.showHTMLHeader=false
      this.ShowCSSFooter=false
      this.ShowCSSHeader=true
    }
  }

  saveShared(){
    //console.log(this.sharedForm.value)
    this.sharedForm.controls['storeId'].setValue(this.storeId)
    this.sharedService.postShared(this.sharedForm.value).subscribe(res=>console.log(res),err=>console.log(err))
    
  }

  updateShared(){
    this.sharedService.putShared(this.shareds['_id'],this.sharedFormUpdate.value).subscribe(res=>console.log(res),err=>console.log(err))
  }

  deleteShareds(){
    this.sharedService.deleteShared(this.shareds['_id']).subscribe(res=>console.log(res),err=>console.log(err))
  }
}
