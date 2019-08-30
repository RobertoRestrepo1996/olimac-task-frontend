import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskService } from "../../../_services/task/task.service";
import { TaskModel } from "../../../models/task.model";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import Swal from 'sweetalert2'



@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  providers: [TaskService]
})
export class TaskListComponent implements OnInit {


  public validator = JSON.parse(localStorage.getItem('user'));
  public role: string

  constructor(private _taskService: TaskService) {
    this.role = this.validator.role
  }

  ngOnInit() {
    this.onGetAllTask();
  }


  //objeto donde estan los datos
  public packTask = new MatTableDataSource<TaskModel[]>();
  public displayedColumns = ['name', 'state', 'actions']
  pageSizeOptions: number[] = [5, 10, 25, 100];

  @ViewChild(MatPaginator)
  public paginator: MatPaginator;


  onGetAllTask() {
    this._taskService.getAllTask().subscribe((response: any) => {

      if (response) {
        this.packTask.data = response.task;
        this.packTask.paginator = this.paginator
      }
    });
  }

  applyFilter(filterValue: string) {
    this.packTask.filter = filterValue.trim().toLowerCase();

    if (this.packTask.paginator) {
      this.packTask.paginator.firstPage();
    }
  }



  onDeleteTask(id) {
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
        return this._taskService.deleteTask(id).subscribe((response: any) => {
          this.onGetAllTask();
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
