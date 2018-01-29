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
import { FilterComponent } from './filter/filter.component';
import { DeliveryComponent } from './delivery/delivery.component';

// Services
import { DeliveryService } from './services/delivery.service';
import { ModalComponent } from './modal/modal.component';
import { InMemUserService } from './services/in-memory-data-service.service';
import { DeliveryCrudComponent } from './delivery/delivery-crud/delivery-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    ModalComponent,
    DeliveryComponent,
    DeliveryCrudComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpInMemoryWebApiModule.forRoot(InMemUserService, {delay: 300}),
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DeliveryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
