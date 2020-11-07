import { Injectable } from '@angular/core';
//Peticiones HTTP
import { HttpClient,HttpHeaders } from '@angular/common/http'
//mMdelo
import { Company } from 'src/app/models/company/company'

@Injectable({
  providedIn: 'root'
})
export class CompanyServicesService {

  constructor(private http:HttpClient) { }
  //HTTPOptions
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  API_Url_Company='http://127.0.0.1:8888/company'

  getCompanys(){
    return this.http.get<Company[]>(this.API_Url_Company,this.httpOptions)
  }
  postCompany(company){
    return this.http.post<Company[]>(this.API_Url_Company,JSON.stringify(company),this.httpOptions)
  }
  getCompany(id){
    return this.http.get<Company>(this.API_Url_Company+'/'+id,this.httpOptions)
  }
  getUserCompany(userId){
    return this.http.get<Company>(this.API_Url_Company+'/user/'+userId,this.httpOptions)
  }
  putCompany(id,company){
    return this.http.post<Company[]>(this.API_Url_Company+'/'+id,JSON.stringify(company),this.httpOptions)
  }
  deleteCompany(id){
    return this.http.post<Company[]>(this.API_Url_Company+'/'+id,this.httpOptions)
  }
}
