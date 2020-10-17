import { Injectable } from '@angular/core';
//Peticiones HTTP
import { HttpClient,HttpHeaders } from '@angular/common/http'
//mMdelo
import { PlanModel } from 'src/app/models/plan-model'

@Injectable({
  providedIn: 'root'
})
export class PlansServiceService {

  constructor(private http:HttpClient) { }
  
  //HTTPOptions
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  API_Url_Plans='http://127.0.0.1:8888/plans'

  getPlans(){
    return this.http.get<PlanModel[]>(this.API_Url_Plans,this.httpOptions)
  }
}
