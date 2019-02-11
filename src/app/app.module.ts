import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GstAddComponent } from './gst-add/gst-add.component';
import { GstEditComponent } from './gst-edit/gst-edit.component';
import { GstGetComponent } from './gst-get/gst-get.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    GstAddComponent,
    GstEditComponent,
    GstGetComponent
  ],
  imports: [
    SlimLoadingBarModule,
    BrowserModule.withServerTransition({appId: 'angular-universal-demo'}),
        FormsModule,
        HttpModule,
    AppRoutingModule,
    MatRippleModule,
    RouterModule.forRoot([
      { path: '', component: GstGetComponent, pathMatch: 'full'},
      { path: 'AddComponents', component: GstAddComponent, pathMatch: 'full'},
      { path: 'EditComponents', component: GstEditComponent, pathMatch: 'full'},

      ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
