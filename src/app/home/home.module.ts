import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule, MatToolbarModule, MatButtonModule, MatMenuModule } from '@angular/material';
import { DashboardModule } from '../dashboard/dashboard.module';


const routes: Routes = [{
    path: 'login',
    component: LoginComponent
  }];

@NgModule({
  declarations: [HomeComponent, LoginComponent],
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    DashboardModule
  ]
})
export class HomeModule { }
