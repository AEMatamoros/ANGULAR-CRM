import { Injectable } from '@angular/core';
//Peticiones HTTP
import { HttpClient,HttpHeaders } from '@angular/common/http'
//mMdelo
import { Template } from 'src/app/models/template/template'

@Injectable({
  providedIn: 'root'
})
export class TemplatesService {

  constructor(private http:HttpClient) { }

  //HTTPOptions
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  API_Url_Template='http://127.0.0.1:8888/template';

  postTemplateImg(form){
    return this.http.post<any>(this.API_Url_Template+'/img',form)
  }

  getTemplates(){
    return this.http.get<Template[]>(this.API_Url_Template,this.httpOptions)
  }

  getTemplate(id){
    return this.http.get<Template[]>(this.API_Url_Template+`/${id}`,this.httpOptions)
  }

  postTemplate(template){
    return this.http.post<Template[]>(this.API_Url_Template,JSON.stringify(template),this.httpOptions)
  }

  deleteTemplate(tempId){
    return this.http.delete(this.API_Url_Template+`/${tempId}`,this.httpOptions)
  }

}
