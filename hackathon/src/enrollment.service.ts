import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RegisterModel } from './register-model';
import { UrlMatcher } from '@angular/router';
import { Apiclass } from './apiclass';
import { LoginModel } from './login-model';

@Injectable({ providedIn: 'root' })
export class EnrollmentService {
  _url = 'http://127.0.0.1:2000';
  _registerapi = this._url + '/register';
  _loginapi = this._url + '/login';
  _searchapi = this._url + '/scrape';


  constructor(private _http: HttpClient) {}

  registerService(registerModel: RegisterModel) {
    const params = new HttpParams()
      .set('username', registerModel.username)
      .set('password', registerModel.password)
      .set('email', registerModel.email)
      .set('name', registerModel.name);

    return this._http.get(this._registerapi, { params });
  }

  loginService(loginModel: LoginModel) {
    const params = new HttpParams()
      .set('email', loginModel.email)
      .set('password', loginModel.password);
    return this._http.get(this._loginapi, { params });
  }
  
  searchService(data : any){
    return this._http.get(this._searchapi)
  }
}
