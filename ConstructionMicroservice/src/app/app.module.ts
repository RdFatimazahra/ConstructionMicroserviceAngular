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
import { DashbordComponent } from './dashbord/dashbord/dashbord.component';
import { ListProjetsComponent } from './projets/List-projet/list-projets/list-projets.component';
import { HttpClientModule } from '@angular/common/http';
import { JwtHelperService ,JWT_OPTIONS } from '@auth0/angular-jwt';
import { TacheListComponent } from './taches/tache-list/tache-list.component';
import { TacheFormComponent } from './taches/tache-form/tache-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProjetComponent,
    AddProjetComponent,
    EditProjetComponent,
    LoginComponent,
    DashbordComponent,
    ListProjetsComponent,
    TacheListComponent,
    TacheFormComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
    
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, 
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
