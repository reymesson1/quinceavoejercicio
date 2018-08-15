import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RestSourceData } from "./rest.datasource";

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule, HttpClientModule],
  providers: [RestSourceData]
})
export class ModelModule { }