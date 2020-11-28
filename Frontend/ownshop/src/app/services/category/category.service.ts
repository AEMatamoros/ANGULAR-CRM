import { Injectable } from '@angular/core';
//Peticiones HTTP
import { HttpClient, HttpHeaders } from '@angular/common/http'
//mMdelo
import { Category } from 'src/app/models/category/category'
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  //HTTPOptions
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  API_Url_Category = 'http://127.0.0.1:8888/category'

  getCategorys() {
    return this.http.get<Category[]>(this.API_Url_Category, this.httpOptions)
  }
  getStoreCategories(storeId){
    return this.http.get<Category[]>(this.API_Url_Category+`/store/${storeId}`, this.httpOptions)
  }
  postCategory(category) {
    return this.http.post<Category[]>(this.API_Url_Category, JSON.stringify(category), this.httpOptions)
  }
  deleteCategory(categoryId) {
    return this.http.delete<Category[]>(this.API_Url_Category + `/${categoryId}`, this.httpOptions)
  }
  putCategory(categoryId, category) {
    return this.http.put<Category[]>(this.API_Url_Category + `/${categoryId}`, JSON.stringify(category), this.httpOptions)
  }
}
