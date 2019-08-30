import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TaskService } from '../../../_services/task/task.service';

@Component({
  selector: 'app-archive-task',
  templateUrl: './archive-task.component.html',
  styleUrls: ['./archive-task.component.css'],
  providers: [TaskService]
})
export class ArchiveTaskComponent implements OnInit {
  public validator = JSON.parse(localStorage.getItem('user'));
  public role: string
  public nameTask = [];
  public archived = [];
  public completed = [];
  constructor(
    private _taskService: TaskService
  ) { 
    this.role = this.validator.role;
  }

  ngOnInit() {
    this.onGetAllTask();
  }


 drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

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

      
      if (event.container.id == 'archived') {
        let state = 'archived'
        transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
        let task =  event.container.data[event.currentIndex]._id;
        this.OnChangeStateTask(task, state);
      }
      
  }

  onGetAllTask() {
    this._taskService.getAllTask().subscribe((response: any) => {

      if (response) {
        this.nameTask = response.task;
        for (let i = 0; i < this.nameTask.length; i++) {

          if (this.nameTask[i].state == 'completed') {
            this.completed.push(this.nameTask[i]);
          }
  
          if (this.nameTask[i].state == 'archived') {
            this.archived.push(this.nameTask[i]);
          }
        }
       
      }
    });
  }

  OnChangeStateTask(idtask, state) {
    return this._taskService.changeStateOfTask(idtask, state).subscribe((response: any) => {

    });
  }

}
