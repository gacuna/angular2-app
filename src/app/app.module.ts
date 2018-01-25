import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap';

// Configs
import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { FilterComponent } from './filter/filter.component';

// Services
import { UsersService } from './services/users.service';
import { ModalComponent } from './modal/modal.component';
import { DeliveryComponent } from './delivery/delivery.component';

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
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
