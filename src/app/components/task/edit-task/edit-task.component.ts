import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { TaskModel } from "../../../models/task.model";
import { TaskService } from "../../../_services/task/task.service";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
  providers: [TaskService]
})
export class EditTaskComponent implements OnInit {

  public oneTask: TaskModel;

  constructor(
    private _taskService: TaskService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params.id;
      this.onGetOneTask(id);
    });
  }


  onGetOneTask(id) {
    return this._taskService.getOneTask(id).subscribe((response: any) => {
      this.oneTask = response.task;
    })
  }


  onSubmit() {
    this._taskService.editTask(this.oneTask).subscribe((response: any) => {
      Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Task edited',
        showConfirmButton: false,
        timer: 1500
      })
    });
  }

}
