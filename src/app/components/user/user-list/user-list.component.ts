import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../_services/user/user.service';
import { UserModel } from "../../../models/user.model";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { TaskService } from '../../../_services/task/task.service';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService, TaskService]
})
export class UserListComponent implements OnInit {

  public validator = JSON.parse(localStorage.getItem('user'));
  public role: string
  constructor(
    private _userService: UserService,
    private _taskService: TaskService
  ) {
    this.role = this.validator.role;
  }

  ngOnInit() {
    this.onGetAllUser();
  }

  //objeto donde estan los datos
  public packUser = new MatTableDataSource<UserModel[]>();
  public displayedColumns = ['name', 'email', 'actions']
  pageSizeOptions: number[] = [5, 10, 25, 100];

  @ViewChild(MatPaginator)
  public paginator: MatPaginator;

  onGetAllUser() {
    this._userService.getAllUser().subscribe((response: any) => {

      if (response) {
        this.packUser.data = response.user;
        this.packUser.paginator = this.paginator
      }
    });
  }

  applyFilter(filterValue: string) {
    this.packUser.filter = filterValue.trim().toLowerCase();

    if (this.packUser.paginator) {
      this.packUser.paginator.firstPage();
    }
  }


  onDeleteUser(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
          return this._userService.deleteUser(id).subscribe((response: any) => {
            this.onGetAllUser();
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
    });

      }
    })
  }
}
