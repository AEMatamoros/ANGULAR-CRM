import { Component, OnInit } from '@angular/core';
import { DatabankService } from 'src/app/services/databank/databank.service'
import { Router,ActivatedRoute } from '@angular/router'
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-databank',
  templateUrl: './databank.component.html',
  styleUrls: ['./databank.component.css']
})
export class DatabankComponent implements OnInit {
  myFile
  segmentedFileName
  extension
  storeId
  data={type:'',route:'',store:''}
  images
  videos
  pdfs
  rars
  others
  constructor(private databankService:DatabankService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.storeId=params['id']
      this.databankService.getBankImgs(this.storeId).subscribe(res=>this.images=res)
      this.databankService.getBankVids(this.storeId).subscribe(res=>this.videos=res)
      this.databankService.getBankPdf(this.storeId).subscribe(res=>this.pdfs=res)
      this.databankService.getBankRar(this.storeId).subscribe(res=>this.rars=res)
      this.databankService.getBankOther(this.storeId).subscribe(res=>this.others=res)
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
      case 'rar':
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
      this.databankService.postDataBankInfo(this.data).subscribe(res=>console.log(res))
    })
  }

}
