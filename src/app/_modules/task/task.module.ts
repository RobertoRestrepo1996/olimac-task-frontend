import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';

import { ProvidersModule } from "../providers/providers.module";
import { TaskListComponent } from '../../components/task/task-list/task-list.component';
import { CreateTaskComponent } from '../../components/task/create-task/create-task.component';
import { EditTaskComponent } from '../../components/task/edit-task/edit-task.component';
import { StateTaskComponent } from '../../components/task/state-task/state-task.component';
import { FindTaskComponent } from '../../components/task/find-task/find-task.component';
import { DragDropComponent } from '../../components/task/drag-drop/drag-drop.component';
import { ArchiveTaskComponent } from '../../components/task/archive-task/archive-task.component';

@NgModule({
  declarations: [TaskListComponent, CreateTaskComponent, EditTaskComponent, StateTaskComponent, FindTaskComponent, DragDropComponent, ArchiveTaskComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    ProvidersModule
  ]
})
export class TaskModule { }
