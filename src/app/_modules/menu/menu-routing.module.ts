import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from 'src/app/sidenav/sidenav.component';

const routes: Routes = [
  {path:'admin', component:SidenavComponent,
    children: [
    {
      path: 'user',
      loadChildren:'../user/user.module#UserModule'
    },
    {
      path: 'task',
      loadChildren:'../task/task.module#TaskModule'
    
  },{
    path:'',loadChildren:'../task/task.module#TaskModule' 
  }
]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
