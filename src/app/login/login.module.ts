import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, BrowserModule, RouterModule.forChild([
    {path: 'login', component: LoginComponent}
  ])],
  providers: []
})

export class LoginModule{

}
