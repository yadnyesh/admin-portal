import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { FormsModule }            from '@angular/forms';
import { HttpModule }             from '@angular/http';
import { routing }                from './app.routing';
import {MaterialModule}           from '@angular/material';
import {BrowserAnimationsModule}  from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppComponent }           from './app.component';
import { NavBarComponent }        from './components/nav-bar/nav-bar.component';
import { LoginComponent }         from './components/login/login.component';

import { LoginService }           from './services/login.service';
import { AddNewBookComponent } from './components/add-new-book/add-new-book.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    AddNewBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
