import { Injectable } from '@angular/core';
//Peticiones HTTP
import { HttpClient,HttpHeaders } from '@angular/common/http'
//mMdelo
import { Store } from 'src/app/models/store/store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http:HttpClient) { }
  //HTTPOptions
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  API_Url_Store='http://127.0.0.1:8888/store';

  getStores(){
    return this.http.get<Store[]>(this.API_Url_Store,this.httpOptions)
  }
  postStore(store){
    return this.http.post<Store[]>(this.API_Url_Store,JSON.stringify(store),this.httpOptions)
  }
  getStore(id){
    return this.http.get<Store>(this.API_Url_Store+'/'+id,this.httpOptions)
  }
  getCompanyStores(companyId){
    return this.http.get<Store>(this.API_Url_Store+'/company/'+companyId,this.httpOptions)
  }
  putStore(id,store){
    return this.http.put<Store[]>(this.API_Url_Store+'/'+id,JSON.stringify(store),this.httpOptions)
  }
  deleteStore(id){
    return this.http.delete<Store[]>(this.API_Url_Store+'/'+id,this.httpOptions)
  }
}
