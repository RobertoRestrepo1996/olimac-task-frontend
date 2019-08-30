import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginUserComponent } from './components/user/login-user/login-user.component';

const routes: Routes = [
 {
   path:'', 
  component:LoginUserComponent
 },{path:'🏠',
loadChildren:'./_modules/menu/menu.module#MenuModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 