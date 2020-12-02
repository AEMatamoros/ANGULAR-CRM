import { Injectable } from '@angular/core';
//Peticiones HTTP
import { HttpClient,HttpHeaders } from '@angular/common/http'
//mMdelo
import { Buys } from 'src/app/models/buys/buys'
@Injectable({
  providedIn: 'root'
})
export class BuysService {

  constructor(private http:HttpClient) { }

  //HTTPOptions
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  API_Url_Buys='http://127.0.0.1:8888/buys';

  
  postBuy(data,userId){
    return this.http.post<Buys[]>(this.API_Url_Buys+`/${userId}`,JSON.stringify(data),this.httpOptions)
  }

  getBuys(){
    return this.http.get<Buys[]>(this.API_Url_Buys,this.httpOptions)
  }

  getUserBuys(userId){
    return this.http.get<Buys[]>(this.API_Url_Buys+`/user/${userId}`,this.httpOptions)
  }

  
}
