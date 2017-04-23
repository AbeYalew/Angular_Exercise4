import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// use FormsModule Only when using Template Driven Forms
import { FormsModule } from '@angular/forms';
// use ReactiveFormsModule Only when using Template Driven Forms
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { TemplateDrivenComponent } from "./template-driven/template-driven.component";
// import { DataDrivenComponent } from "./data-driven/data-driven.component";
import { UserdataComponent } from './userdata.component';

import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent, 
    // TemplateDrivenComponent,
    // DataDrivenComponent,
    UserdataComponent
  ],
  // to use Forms we must have FormsModule OR ReactiveFormsModule Here
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
