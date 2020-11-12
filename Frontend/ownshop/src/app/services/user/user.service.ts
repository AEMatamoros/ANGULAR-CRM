import { Injectable } from '@angular/core';
//Peticiones HTTP
import { HttpClient,HttpHeaders } from '@angular/common/http'
//mMdelo
import { User} from 'src/app/models/user/user'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  //HTTPOptions
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  API_Url_Users='http://127.0.0.1:8888/users'

  getUsers(){
    return this.http.get<User[]>(this.API_Url_Users,this.httpOptions)
  }

  getUser(userId){
    console.log(this.API_Url_Users+`/${userId}`)
    return this.http.get<User[]>(this.API_Url_Users+`/${userId}`,this.httpOptions)
  }

  deleteUser(userId){
    return this.http.delete<User[]>(this.API_Url_Users+`/${userId}`,this.httpOptions)
  }

  putUser(userId,user){
    return this.http.put<User[]>(this.API_Url_Users+`/${userId}`,JSON.stringify(user),this.httpOptions)
  }
}
