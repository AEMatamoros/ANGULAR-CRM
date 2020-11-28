import { Component, OnInit } from '@angular/core';
import { DatabankService } from 'src/app/services/databank/databank.service'
import { ProductService } from 'src/app/services/product/product.service'
import { StoreService } from 'src/app/services/store/store.service'
import { Router,ActivatedRoute } from '@angular/router'
import { subscribeOn } from 'rxjs/operators';
import { FormControl,FormGroup,Validators } from '@angular/forms'

@Component({
  selector: 'app-databank',
  templateUrl: './databank.component.html',
  styleUrls: ['./databank.component.css']
})
export class DatabankComponent implements OnInit {
  //Initializers
  myFile
  segmentedFileName
  extension
  storeId
  store
  data={type:'',route:'',store:'',parent:''}
  images
  videos
  pdfs
  rars
  others
  folders
  isFolder:boolean=false
  currentFolder=""
  parent=""
  folderCount
  folderOrder=[]
  products
  //Shortcuts

  newFolderForm= new FormGroup({
    folderName: new FormControl('',Validators.required),
    parentFolder: new FormControl('')
  })
  constructor(private databankService:DatabankService,private route:ActivatedRoute,private productService:ProductService,private storeService:StoreService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.storeId=params['id']
      this.databankService.getBankImgs(this.storeId+'/none').subscribe(res=>{this.images=res,this.addShortCutImages(this.images);})
      this.databankService.getBankVids(this.storeId+'/none').subscribe(res=>{this.videos=res,this.addShortCutVideos(this.videos)})
      this.databankService.getBankPdf(this.storeId+'/none').subscribe(res=>{this.pdfs=res,this.addShortCutPdfs(this.pdfs)})
      this.databankService.getBankRar(this.storeId+'/none').subscribe(res=>{this.rars=res,this.addShortCutRars(this.rars)})
      this.databankService.getBankOther(this.storeId+'/none').subscribe(res=>{this.others=res,this.addShortCutOthers(this.others)})
      this.databankService.getBankFolders(this.storeId,'none').subscribe(res=>this.folders=res);
      this.productService.getStoreProducts(this.storeId).subscribe(res=>{this.products=res,this.addShortCutProducts(this.products)})
      this.storeService.getStore(this.storeId).subscribe(res=>this.store=res)
    })
  }

  selectFile(event){
    if(event.target.files.length>0){
        const file= event.target.files[0];
        this.myFile=file;
        console.log(this.myFile) 
        
    }
  
  }

  upload(){
    this.segmentedFileName=this.myFile.name.split('.')
    this.extension=this.segmentedFileName[this.segmentedFileName.length-1]
    switch(this.extension.toLowerCase()){
      case 'jpg' || 'png'|| 'jpeg' || 'gif':
        this.data.type="img"
        break;
      case 'mp4' || 'avi'|| 'mpg' || 'wmv':
        this.data.type="vid"
        break;
      case 'pdf':
        this.data.type="pdf"
        break;
      case 'rar' || 'zip':
        this.data.type="rar"
        break;
      default:
        this.data.type="other"
        break
    } 
    const formData= new FormData();
    formData.append('file',this.myFile);
    this.databankService.postDataBankFile(formData).subscribe(res=>{
      this.data.route=res.route
      this.data.store=this.storeId
      this.data.parent=this.currentFolder
      this.databankService.postDataBankInfo(this.data).subscribe(res=>console.log(res))
      this.callData(this.currentFolder)
    })
  }

  newFolder(){
    this.newFolderForm.controls['parentFolder'].setValue(this.currentFolder)
    this.databankService.postDataBankFolder(this.storeId,this.newFolderForm.value).subscribe(res=>console.log(res))
    this.callData(this.currentFolder)
  }

  openFolder(folderId){
      this.callData(folderId)
      this.isFolder=true
      this.folderOrder.push(folderId)
      //console.log(this.folderOrder)
  }

  goBack(){
    this.folderCount=0
    console.log(this.folderOrder)
    if(this.folderOrder.length>0){
      this.currentFolder=this.folderOrder.pop()
      this.callData(this.currentFolder)
      //console.log(this.folderOrder.length)

    }else{
      this.currentFolder=this.folderOrder.pop()
      this.ngOnInit()
    }
    
  }

  callData(folderId){
    this.databankService.getBankImgs(this.storeId+`/${folderId}`).subscribe(res=>{this.images=res})
      this.databankService.getBankVids(this.storeId+`/${folderId}`).subscribe(res=>this.videos=res)
      this.databankService.getBankPdf(this.storeId+`/${folderId}`).subscribe(res=>this.pdfs=res)
      this.databankService.getBankRar(this.storeId+`/${folderId}`).subscribe(res=>this.rars=res)
      this.databankService.getBankOther(this.storeId+`/${folderId}`).subscribe(res=>this.others=res)
      this.databankService.getBankFolders(this.storeId,folderId).subscribe(res=>this.folders=res);
      this.currentFolder=folderId
      
  }

  addShortCutImages(images){
    images.forEach(img => {
      img['shortcut']=`{imagen:${img['_id']}}`
    });
  }

  addShortCutVideos(videos){
    videos.forEach(vid => {
      vid['shortcut']=`{video:${vid['_id']}}`
    });
  }

  addShortCutPdfs(pdfs){
    pdfs.forEach(pdf => {
      pdf['shortcut']=`{pdf:${pdf['_id']}}`
    });
  }

  addShortCutRars(rars){
    rars.forEach(rar => {
      rar['shortcut']=`{rar:${rar['_id']}}`
    });
  }

  addShortCutOthers(others){
    others.forEach(other => {
      other['shortcut']=`{other:${other['_id']}}`
    });
  }

  addShortCutProducts(products){
    products.forEach(product => {
      product['shortcut']=`{product:${product['_id']}}`
    });
  }
  
}
