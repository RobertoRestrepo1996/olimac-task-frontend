import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { TaskService } from "../../../_services/task/task.service";
import { UserService } from '../../../_services/user/user.service';
import { UserModel } from '../../../models/user.model';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css'],
  providers: [TaskService, UserService]
})
export class DetailsUserComponent implements OnInit {

  public user = UserModel;
  public allUsertasks = [];
  public currentTask = [];
  constructor(
    private _taskService: TaskService,
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params.id;
      this.onGetTaskUser(id)
      this.onGetOneUser(id);
    });
  }

  onGetTaskUser(id) {
    this._taskService.getTaskUser(id).subscribe((response: any) => {
      this.allUsertasks = response.task;
      for (let i = 0; i < this.allUsertasks.length; i++) {

        if (this.allUsertasks[i].state == 'open') {
          this.currentTask.push(this.allUsertasks[i]);
        }
        if (this.allUsertasks[i].state == 'in-progress') {
          this.currentTask.push(this.allUsertasks[i]);
        }
      }
    });
  }

  onGetOneUser(id) {
    this._userService.getOneUser(id).subscribe((response: any) => {
      this.user = response.user
    });
  }


}




