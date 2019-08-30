import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from '../../components/user/user-list/user-list.component';
import { CreateUserComponent } from '../../components/user/create-user/create-user.component';
import { EditUserComponent } from "../../components/user/edit-user/edit-user.component";
import { DetailsUserComponent } from "../../components/user/details-user/details-user.component";
//import { LoginUserComponent } from '../../components/user/login-user/login-user.component';

const routes: Routes = [
  //{path:'', component:LoginUserComponent},
  {path:'user-list', component:UserListComponent},
  {path:'create-user', component:CreateUserComponent},
  {path:'edit-user/:id', component:EditUserComponent},
  {path:'detail-user/:id', component:DetailsUserComponent}
  //{path:'login-user', component:LoginUserComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
