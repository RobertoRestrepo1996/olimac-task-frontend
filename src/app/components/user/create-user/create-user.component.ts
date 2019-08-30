import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../_services/user/user.service";
import { UserModel } from "../../../models/user.model";
import Swal from 'sweetalert2'


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [UserService]
})


export class CreateUserComponent implements OnInit {

  public validator = JSON.parse(localStorage.getItem('user'));
  public role: string
  public objUser: UserModel;
  public title: string;
  public options = [
    { value: 'USER_ROLE', viewValue: 'USER_ROLE' },
    { value: 'ADMIN_ROLE', viewValue: 'ADMIN_ROLE' }
  ];

  constructor(
    private _userService: UserService
  ) {
    this.title = "Create a new User";
    this.objUser = new UserModel('', '', '', '');
    this.role = this.validator.role;
  }


  ngOnInit() {

  }



  onSubmit(form) {
    this._userService.createUser(this.objUser).subscribe((response: any) => {

      if (response.user) {
        Swal.fire({
          position: 'top-end',
          type: 'success',
          title: 'User created',
          showConfirmButton: false,
          timer: 1500
        })
        form.reset();
      }
    }), error => {
      console.log(<any>error)
    }
  }



}
