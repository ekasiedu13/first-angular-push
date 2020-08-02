import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {PublicComponent} from './public.component';
import {DrugComponent} from './drug/drug.component';
import {RouterModule} from '@angular/router';
import {NavComponent} from './nav/nav.component';
import {HomeComponent} from './home/home.component';
import {HttpService} from '../http.service';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';

let routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'about', component: AboutComponent}
    ]
  }
];

@NgModule({
  declarations: [PublicComponent,
    DrugComponent,
    NavComponent,
    HomeComponent,
    UserComponent,
    AboutComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    NavComponent
  ],
  providers: [
    HttpService
  ]
})
export class PublicModule {
}
