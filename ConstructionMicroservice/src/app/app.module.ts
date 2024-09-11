import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListProjetComponent } from './projets/add-projet/list-projet/list-projet.component';
import { AddProjetComponent } from './projets/add-projet/add-projet/add-projet.component';
import { EditProjetComponent } from './projets/add-projet/edit-projet/edit-projet.component';
import { LoginComponent } from './auth/login/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ListProjetComponent,
    AddProjetComponent,
    EditProjetComponent,
    LoginComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
