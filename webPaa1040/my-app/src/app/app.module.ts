import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';

import { AdminModule } from "./admin/admin.module";
import { MasterModule } from "./master/master.module";
import { ModelModule } from "./model/model.module";
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule, MatCardModule,MatFormFieldModule } from '@angular/material';

import { MasterComponent } from "./master/master.component";
import { DetailComponent } from "./detail/detail.component";
import { RegistrationComponent } from "./admin/registration.component";  
import { LoginComponent } from "./admin/login.component";
import { ViewComponent } from "./master/view.component";
import { RestSourceData }  from "./model/rest.datasource";

import { DialogOverviewExampleDialog } from "./master/dialog-overview-example-dialog";
import { ReversePipe } from './master/reverse.pipe';
import { AccountComponent } from "./admin/account.component";

@NgModule({ 
  declarations: [
    AppComponent,DetailComponent
  ],
  imports: [
    MomentModule,BrowserModule, HttpClientModule,FormsModule, ReactiveFormsModule, BrowserAnimationsModule, AdminModule, MasterModule, ModelModule,
    MatIconModule,MatMenuModule,MatToolbarModule, MatCardModule, MatButtonModule,
    RouterModule.forRoot([      
      { path: "master", component: MasterComponent },
      { path: "detail", component: DetailComponent },
      { path: "registration", component: RegistrationComponent },
      { path: "login", component: LoginComponent },
      { path: "view", component: ViewComponent },
      { path: "view/:id", component: ViewComponent },
      { path: "account", component: AccountComponent },
      { path: "account/:id", component: AccountComponent },
      { path: "**", redirectTo: '/master' }  
    ])
  ],  
  bootstrap: [AppComponent, DialogOverviewExampleDialog]
})
export class AppModule { }
