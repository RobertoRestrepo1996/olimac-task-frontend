import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskService } from '../../../_services/task/task.service';
import { StateModel } from "../../../models/state.model";
import { TaskModel } from "../../../models/task.model";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: 'app-find-task',
  templateUrl: './find-task.component.html',
  styleUrls: ['./find-task.component.css'],
  providers: [TaskService]
})
export class FindTaskComponent implements OnInit {

  public validator = JSON.parse(localStorage.getItem('user'));
  public role: string

  constructor(
    private _taskService: TaskService
  ) {
    this.objState = new StateModel('');
    this.role = this.validator.role;
  }

  ngOnInit() {
  }

  public objState: StateModel;
  public packTask = new MatTableDataSource<TaskModel[]>();
  public displayedColumns = ['name', 'state', 'actions'];
  pageSizeOptions: number[] = [5, 10, 25, 100];

  @ViewChild(MatPaginator)
  public paginator: MatPaginator;


  public options = [
    { value: 'open', viewValue: 'open' },
    { value: 'in-progress', viewValue: 'in-progress' },
    { value: 'completed', viewValue: 'completed' },
    { value: 'archived', viewValue: 'archived' }
  ];

  onFindTaskByState(form) {
    let state = this.objState.state;
    this._taskService.findTaskByState(state).subscribe((response: any) => {
      if (response) {
        this.packTask.data = response.task;
        this.packTask.paginator = this.paginator
        form.reset();
      }
    });
  }

  applyFilter(filterValue: string) {
    this.packTask.filter = filterValue.trim().toLowerCase();

    if (this.packTask.paginator) {
      this.packTask.paginator.firstPage();
    }
  }

}
