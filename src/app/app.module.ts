import { HttpModule } from '@angular/http';
import { HttpInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap';

// Configs
import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { FilterComponent } from './filter/filter.component';
import { DeliveryComponent } from './delivery/delivery.component';

// Services
import { UsersService } from './services/users.service';
import { DeliveryService } from './services/delivery.service';
import { ModalComponent } from './modal/modal.component';
import { InMemUserService } from './services/in-memory-data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    FilterComponent,
    ModalComponent,
    DeliveryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpInMemoryWebApiModule.forRoot(InMemUserService, {delay: 300}),
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UsersService, DeliveryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
