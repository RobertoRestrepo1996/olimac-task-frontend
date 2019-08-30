import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { TaskService } from '../../../_services/task/task.service';


@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css'],
  providers: [TaskService]
})
export class DragDropComponent implements OnInit {

  public nameTask = [];
  public open = [];
  public inProgress = [];
  public completed = [];

  public validator = JSON.parse(localStorage.getItem('user'));
  public role: string

  constructor(
    private _taskService: TaskService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.role = this.validator.role;
  }

  ngOnInit() {
    this.onGetTaskUser();
  }

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

    } 
      if (event.container.id == 'open') {
        
        let state = 'open'
        transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
        let task = event.container.data[event.currentIndex]._id;
        this.OnChangeStateTask(task, state);
      }

      if (event.container.id == 'in-progress') {
        let state = 'in-progress'
        transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
        let task =  event.container.data[event.currentIndex]._id;
        this.OnChangeStateTask(task, state);
      }

      if (event.container.id == 'completed') {
        let state = 'completed'
        transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
        let task = event.container.data[event.currentIndex]._id;
        this.OnChangeStateTask(task, state);
      }
      
  }

  onGetTaskUser() {
    let id = localStorage.getItem('id');
    this._taskService.getTaskUser(id).subscribe((response: any) => {

      this.nameTask = response.task;

      for (let i = 0; i < this.nameTask.length; i++) {

        if (this.nameTask[i].state == 'open') {
          this.open.push(this.nameTask[i]);
        }

        if (this.nameTask[i].state == 'in-progress') {
          this.inProgress.push(this.nameTask[i]);
        }

        if (this.nameTask[i].state == 'completed') {
          this.completed.push(this.nameTask[i]);
        }
      }
    });
  }

  OnChangeStateTask(idtask, state) {
    return this._taskService.changeStateOfTask(idtask, state).subscribe((response: any) => {

    });
  }

}
