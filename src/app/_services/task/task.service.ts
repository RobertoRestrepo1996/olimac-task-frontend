import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  //protected headers = new HttpHeaders().set('Authorization', this.eltoken);

  constructor(private _http: HttpClient) {}

  protected url = environment.url;
  

  getAllTask() {
    const token = localStorage.getItem('Authorization');
    const httpOptions = new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: token
    });
    return this._http.get(this.url + 'task', { headers: httpOptions });
  }

  getOneTask(id) {
    const token = localStorage.getItem('Authorization');
    const httpOptions = new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: token
    });
    return this._http.get(this.url + 'task/' + id, { headers: httpOptions });
  }

  getTaskUser(id) {
    const token = localStorage.getItem('Authorization');
    const httpOptions = new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: token
    });
    return this._http.get(this.url + 'findtaskbyuser/' + id,{headers: httpOptions});
  }


  findTaskByState(id){
    const token = localStorage.getItem('Authorization');
    const httpOptions = new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: token
    });
    return this._http.get(this.url + 'taskbystate/' + id , {headers: httpOptions});
  }


  createTask(task) {
    const token = localStorage.getItem('Authorization');
    const httpOptions = new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: token
    });
    let body = JSON.stringify(task);
    return this._http.post(this.url + 'task', body, { headers: httpOptions });
  }


  editTask(task) {
    const token = localStorage.getItem('Authorization');
    const httpOptions = new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: token
    });
    let body = JSON.stringify(task);
    return this._http.put(this.url + 'task/' + task._id, body, { headers: httpOptions });
  }

  addUserToTask(idT, idU) {
    const token = localStorage.getItem('Authorization');
    const httpOptions = new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: token
    });
    let body = idU
    return this._http.put(this.url + 'adduser/' + idT, { user: body }, { headers: httpOptions });
  }

  deleteUserToTask(idT, idU) {
    const token = localStorage.getItem('Authorization');
    const httpOptions = new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: token
    });
    let body = idU
    return this._http.put(this.url + 'deleteuser/' + idT, { user: body }, { headers: httpOptions });
  }

  changeStateOfTask(idT, est) {
    const token = localStorage.getItem('Authorization');
    const httpOptions = new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: token
    });
    let body = est
    return this._http.put(this.url + 'state-task/' + idT, { state: body }, { headers: httpOptions });

  }

  deleteTask(id) {
    const token = localStorage.getItem('Authorization');
    const httpOptions = new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: token
    });
    return this._http.delete(this.url + 'task/' + id, { headers: httpOptions });
  }

}
