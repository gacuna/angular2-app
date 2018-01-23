import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';

export const appRoutes: Routes = [
  { path: 'users', component: UsersComponent}
];