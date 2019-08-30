import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/_services/login/login.service';
import { loginModel } from "../../../models/login.model";
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css'],
  providers: [LoginService]
})
export class LoginUserComponent implements OnInit {

  public title: String;
  public loginUser: loginModel;


  constructor(
    private _loginService: LoginService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.title = "Olimac task";
    this.loginUser = new loginModel('', '');
  }

  ngOnInit() {
  }


  onSubmit(form: NgForm) {
    this._loginService.loginUser(this.loginUser).subscribe((response: any) => {
      if (response) {
        localStorage.setItem('id', response.user._id);
        localStorage.setItem('Authorization', response.Authorization);
        localStorage.setItem('user', JSON.stringify(response.user));

        if(response.user.role == 'USER_ROLE'){
          this._router.navigate(['🏠/admin/task/mytasks'])
        }else{
          this._router.navigate(['🏠/admin/user/user-list'])
        }
       
      }
    });
  }

}
