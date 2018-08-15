import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatOptionModule,  
  MatFormFieldControl,
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MasterComponent } from "./master.component";
import { ViewComponent } from "./view.component";
import { DialogOverviewExampleDialog } from "./dialog-overview-example-dialog";
import { ReversePipe } from './reverse.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule,
    MomentModule,BrowserModule, HttpClientModule,FormsModule, ReactiveFormsModule, BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatListModule, MatIconModule, MatGridListModule, 
    MatDividerModule, MatCardModule, MatTableModule, MatTooltipModule,  MatFormFieldModule,  MatRadioModule,MatOptionModule,MatSelectModule, MatSliderModule,  MatInputModule,  
    MatDialogModule, MatMenuModule, MatExpansionModule, MatSidenavModule, MatTabsModule,
  ],
  declarations: [MasterComponent, ViewComponent, DialogOverviewExampleDialog,ReversePipe],
  exports: [MasterComponent, ViewComponent, DialogOverviewExampleDialog, ReversePipe]
})
export class MasterModule { }