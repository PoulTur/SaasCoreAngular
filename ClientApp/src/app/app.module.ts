import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtHelper } from 'angular2-jwt';
import { RouterModule } from '@angular/router';


import { routing } from './app.routing';

import { ActivityService } from "../app/_services/activity.service";


import { AppComponent } from './app.component';

import { HomeComponent } from "../app/home/home.component";
import { AdminComponent } from "../app/admin/admin.component";


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { JwtInterceptor } from "../app/_helpers/jwt.interceptor";
import { ErrorInterceptor } from "../app/_helpers/error.interceptor";


import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from "primeng/inputtext"
import { SelectButtonModule } from 'primeng/selectbutton';
import { TabViewModule } from 'primeng/tabview';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ChipsModule } from 'primeng/chips';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TabMenuModule } from 'primeng/tabmenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { ChartModule } from 'primeng/chart';
import { PasswordModule } from "primeng/password";
import { MessageModule } from 'primeng/message';
import { TreeTableModule } from 'primeng/treetable';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

import { LoginComponent } from '../app/login/login.component';

import { MainComponent } from '../app/main/main.component';
import { NavMenuComponent } from "../app/nav-menu/nav-menu.component";
import { ActivitiesComponent } from './activities/activities.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavMenuComponent,
    ActivitiesComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,


    ButtonModule,
    TableModule,
    ChartModule,
    MultiSelectModule,
    PanelModule,
    InputTextModule,
    SelectButtonModule,
    TabViewModule,
    RadioButtonModule,
    ChipsModule,
    AutoCompleteModule,
    TabMenuModule,
    PanelMenuModule,
    DropdownModule,
    DialogModule,
    PasswordModule,
    MessageModule,
    ToastModule,
    ConfirmDialogModule,
    TreeTableModule,
    ProgressSpinnerModule,
    routing
  ],
  providers: [
    JwtHelper,
    HttpClientModule,
    ConfirmationService,
    MessageService,
    ActivityService,

    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
