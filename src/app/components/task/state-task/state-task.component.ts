import { Component, OnInit, ViewChild} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { TaskModel } from "../../../models/task.model";
import { UserModel } from "../../../models/user.model";
import { TaskService } from "../../../_services/task/task.service";
import { UserService } from "../../../_services/user/user.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-state-task',
  templateUrl: './state-task.component.html',
  styleUrls: ['./state-task.component.css'],
  providers: [TaskService, UserService]
})
export class StateTaskComponent implements OnInit {

  public oneTask: TaskModel;
  public taskUser=[];

  constructor(
    private _taskService: TaskService,
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.onGetAllUser();
    this._route.params.subscribe(params => {
      let id = params.id;
      this.onGetOneTask(id);
      
    });
  }

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

  onGetOneTask(id) {
    return this._taskService.getOneTask(id).subscribe((response: any) => {
      this.oneTask = response.task;
      this.taskUser = response.task.user
    })
  }


  onAddUser(idU){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, add it!'
    }).then((result) => {
      if (result.value) {
        this._route.params.subscribe(params => {
          let idT = params.id;
          this._taskService.addUserToTask(idT, idU).subscribe((response:any)=>{
            this.onGetOneTask(response.task._id);
            Swal.fire(
              'added user!',
              'Your user has been added.',
              'success'
            )
          });
        });
      }
    })

  }

  OnDeleteUser(idU){
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
        this._route.params.subscribe(params => {
          let idT = params.id;
          this._taskService.deleteUserToTask(idT, idU).subscribe((response:any)=>{
            this.onGetOneTask(response.task._id);
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          });
        });
      }
    })

  }

}

