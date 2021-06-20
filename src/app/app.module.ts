import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { Page1Component } from './page1/page1.component';
import { AlumniWeekendComponent } from './alumni-weekend/alumni-weekend.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Page1Component,
    AlumniWeekendComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
