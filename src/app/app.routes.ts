import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DeliveryComponent } from './delivery/delivery.component';

export const appRoutes: Routes = [
  { path: 'users', component: UsersComponent},
  { path: 'delivery', component: DeliveryComponent}
];