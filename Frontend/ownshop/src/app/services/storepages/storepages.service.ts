import { Injectable } from '@angular/core';
//Peticiones HTTP
import { HttpClient,HttpHeaders } from '@angular/common/http'
//mMdelo
import { Storepage } from 'src/app/models/storepage/storepage';

@Injectable({
  providedIn: 'root'
})
export class StorepagesService {

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  API_Url_StorePage='http://127.0.0.1:8888/storepage';

  getStoresPages(){
    return this.http.get<Storepage[]>(this.API_Url_StorePage,this.httpOptions)
  }
  postStorePage(storePage){
    return this.http.post<Storepage[]>(this.API_Url_StorePage,JSON.stringify(storePage),this.httpOptions)
  }
}
