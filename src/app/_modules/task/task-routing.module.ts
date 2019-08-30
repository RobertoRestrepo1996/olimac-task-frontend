import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskListComponent } from "../../components/task/task-list/task-list.component";
import { CreateTaskComponent } from '../../components/task/create-task/create-task.component';
import { EditTaskComponent } from '../../components/task/edit-task/edit-task.component';
import { StateTaskComponent } from "../../components/task/state-task/state-task.component";
import { FindTaskComponent } from '../../components/task/find-task/find-task.component';
import { DragDropComponent } from 'src/app/components/task/drag-drop/drag-drop.component';
import { ArchiveTaskComponent } from '../../components/task/archive-task/archive-task.component';


const routes: Routes = [
  {path:'task-list', component:TaskListComponent},
  {path:'create-task', component:CreateTaskComponent},
  {path:'edit-task/:id', component:EditTaskComponent},
  {path:'state-task/:id', component:StateTaskComponent},
  {path:'find-task', component:FindTaskComponent},
  {path:'mytasks', component:DragDropComponent},
  {path:'archive-task', component:ArchiveTaskComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
