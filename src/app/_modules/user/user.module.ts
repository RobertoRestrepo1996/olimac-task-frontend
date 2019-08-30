import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { ProvidersModule } from "../providers/providers.module";
import { UserListComponent } from '../../components/user/user-list/user-list.component';
import { CreateUserComponent } from '../../components/user/create-user/create-user.component';
import { EditUserComponent } from '../../components/user/edit-user/edit-user.component';
import { DetailsUserComponent } from '../../components/user/details-user/details-user.component';



@NgModule({
  declarations: [UserListComponent, CreateUserComponent, EditUserComponent, DetailsUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ProvidersModule
  ]
})
export class UserModule { }
