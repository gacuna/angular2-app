import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, Router } from '@angular/router';

// Configs
import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { FilterComponent } from './filter/filter.component';

// Services
import { UsersService } from './services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
