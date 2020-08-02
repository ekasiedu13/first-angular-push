import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PublicModule} from './public/public.module';
import {PublicComponent} from './public/public.component';
import {LoginComponent} from './login/login.component';
import {LoginModule} from './login/login.module';

const routes: Routes = [
  {path: '#', component: PublicComponent},
  {path: '**', component: PublicComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PublicModule, LoginModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
