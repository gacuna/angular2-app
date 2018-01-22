import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './users/user-list/user-list.component';

export const appRoutes: Routes = [
  { path: 'users', component: UserListComponent}
];