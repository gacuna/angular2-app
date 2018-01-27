import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryComponent } from './delivery/delivery.component';

export const appRoutes: Routes = [
  { path: 'delivery', component: DeliveryComponent}
];