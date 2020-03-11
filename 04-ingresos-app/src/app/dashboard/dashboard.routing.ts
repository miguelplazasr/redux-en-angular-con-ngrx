import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {dashboardRoutes} from './dashboard.routes';

const ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    // canActivate: [ AuthGuardService ],
    // Lo inyecta directamente
    children: dashboardRoutes
  }
];


@NgModule({
  imports: [
    RouterModule.forChild( ROUTES )
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRouting { }
