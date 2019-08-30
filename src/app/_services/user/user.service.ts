import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //headers = new HttpHeaders();
  protected url = environment.url;
  
  // public eltoken = localStorage.getItem('token');
  constructor(private _http: HttpClient) {

    // this.headers.append('Content-type','application/json');
    // this.headers.append('token', localStorage.getItem("token"));

  }

  //protected headers = new HttpHeaders().set('Authorization', this.eltoken);

  getAllUser() {

    const token = localStorage.getItem('Authorization');
    const httpOptions = new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: token
    });

    return this._http.get(this.url + 'user', { headers: httpOptions  });
  }


  getOneUser(id) {
    const token = localStorage.getItem('Authorization');
    const httpOptions = new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: token
    });
    return this._http.get(this.url + 'user/' + id, { headers: httpOptions })
  }


  createUser(user) {
    const token = localStorage.getItem('Authorization');
    const httpOptions = new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: token
    });
    let body = JSON.stringify(user);
    return this._http.post(this.url + 'user', body, { headers: httpOptions });
  }


  editUser(user) {
    const token = localStorage.getItem('Authorization');
    const httpOptions = new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: token
    });
    let body = JSON.stringify(user);
    return this._http.put(this.url + 'user/' + user._id, body, { headers: httpOptions });
  }


  deleteUser(id) {
    const token = localStorage.getItem('Authorization');
    const httpOptions = new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: token
    });
    return this._http.delete(this.url + 'user/' + id, { headers: httpOptions });
  }



}
