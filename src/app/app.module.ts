import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminListComponent } from './administrative/admin-list/admin-list.component';
import { AdminFormComponent } from './administrative/admin-form/admin-form.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminListComponent,
    AdminFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,    
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AdminFormComponent]
})
export class AppModule { }
