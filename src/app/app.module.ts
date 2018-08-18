import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { DashboardModule } from './dashboard/dashboard.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    DashboardModule,
    NgxPaginationModule,

  ],
  providers: [],
  bootstrap: [
    AppComponent,

  ]
})
export class AppModule { }
