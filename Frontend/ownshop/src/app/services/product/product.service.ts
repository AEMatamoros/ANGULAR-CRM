import { Injectable } from '@angular/core';
//Peticiones HTTP
import { HttpClient,HttpHeaders } from '@angular/common/http'
//modelo
import { Product } from 'src/app/models/product/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  //HTTPOptions
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  API_Url_Product='http://127.0.0.1:8888/product';

  getStoreProducts(storeId){
    return this.http.get(this.API_Url_Product+`/store/${storeId}`,this.httpOptions)
  }

  postProductImg(form){
    return this.http.post<any>(this.API_Url_Product+'/img',form)
  }

  postProduct(product){
    return this.http.post<Product[]>(this.API_Url_Product,JSON.stringify(product),this.httpOptions)
  }
}
