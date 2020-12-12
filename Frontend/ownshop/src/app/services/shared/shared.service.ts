import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { }
  
  //HTTPOptions
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  API_Url_Shared='http://127.0.0.1:8888/shared'

  getShareds(){
    return this.http.get(this.API_Url_Shared,this.httpOptions)
  }
  getStoreShared(storeId){
    return this.http.get(this.API_Url_Shared+`/store/${storeId}`,this.httpOptions)
  }
  postShared(shared){
    return this.http.post(this.API_Url_Shared,JSON.stringify(shared),this.httpOptions)
  }
  deleteShared(sharedId){
    return this.http.delete(this.API_Url_Shared+`/${sharedId}`,this.httpOptions)
  }
  putShared(sharedId,shared){
    return this.http.put(this.API_Url_Shared+`/${sharedId}`,JSON.stringify(shared),this.httpOptions)
  }
}
