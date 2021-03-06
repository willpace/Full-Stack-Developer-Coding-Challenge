import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './authentication/components/login/login.component';
import {UserRegistrationComponent} from './authentication/components/user-registration/user-registration.component';
import {GrmDashboardComponent} from './grm-dashboard/components/grm-dashboard.component';
import {AuthenticationService} from './authentication/authentication.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: UserRegistrationComponent
  },
  {
    path: 'dashboard',
    component: GrmDashboardComponent,
    canActivate: [AuthenticationService]
  },
  {
    path: '**/*',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
