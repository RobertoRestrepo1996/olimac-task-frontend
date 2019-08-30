import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(
    private _http: HttpClient,
    
    ) { }

  protected headers = new HttpHeaders().set('Content-type', 'application/json');
  protected url = environment.url;


  loginUser(user) {
    let body = JSON.stringify(user);
    return this._http.post(this.url + 'login', body, { headers: this.headers })
  }

}