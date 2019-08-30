import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvidersModule } from "./_modules/providers/providers.module";
// import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginUserComponent } from './components/user/login-user/login-user.component';



@NgModule({
  declarations: [
    AppComponent,
    //SidenavComponent,
    LoginUserComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ProvidersModule,
    LayoutModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
