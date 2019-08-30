import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from '../../sidenav/sidenav.component';
import { ProvidersModule } from "../providers/providers.module";

import { MenuRoutingModule } from './menu-routing.module';

@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    ProvidersModule
  ],entryComponents:[
    SidenavComponent
  ],bootstrap:[SidenavComponent]
})
export class MenuModule { }
