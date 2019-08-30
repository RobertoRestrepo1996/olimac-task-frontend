import { Component, OnInit } from '@angular/core';
import { TaskService } from "../../../_services/task/task.service";
import { TaskModel } from "../../../models/task.model";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
  providers: [TaskService]
})
export class CreateTaskComponent implements OnInit {

  public validator = JSON.parse(localStorage.getItem('user'));
  public role: string
  public objTask: TaskModel;
  public title: string;

  constructor(private _taskService: TaskService
  ) {
    this.title = "Create a new Task";
    this.objTask = new TaskModel('', '');
    this.role = this.validator.role;
  }

  ngOnInit() {
  }


  onSubmit(form){
    this._taskService.createTask(this.objTask).subscribe((response:any)=>{
      if (response) {
        Swal.fire({
          position: 'top-end',
          type: 'success',
          title: 'Task created',
          showConfirmButton: false,
          timer: 1500
        })
        form.reset();
      }
    });
  }
}
