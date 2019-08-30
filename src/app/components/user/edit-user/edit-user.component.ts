import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { UserModel } from "../../../models/user.model";
import { UserService } from "../../../_services/user/user.service";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
  providers: [UserService]
})
export class EditUserComponent implements OnInit {

  public oneUser: UserModel;
  public options = [
    { value: 'USER_ROLE', viewValue: 'USER_ROLE' },
    { value: 'ADMIN_ROLE', viewValue: 'ADMIN_ROLE' }
  ];

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params.id;
      this.onGetOneUser(id);
    });
  }

  onGetOneUser(id) {
    return this._userService.getOneUser(id).subscribe((response: any) => {
      this.oneUser = response.user;
    });
  }

  onSubmit() {
    this._userService.editUser(this.oneUser).subscribe((response: any) => {
      Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'User edited',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }

}
