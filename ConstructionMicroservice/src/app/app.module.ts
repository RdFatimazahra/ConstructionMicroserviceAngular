import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddProjetComponent } from './projets/add-projet/add-projet/add-projet.component';
import { LoginComponent } from './auth/login/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashbordComponent } from './dashbord/dashbord/dashbord.component';
import { HttpClientModule } from '@angular/common/http';
import { JwtHelperService ,JWT_OPTIONS } from '@auth0/angular-jwt';

import { TacheListComponent } from './taches/tache-list/tache-list.component';
import { TacheFormComponent } from './taches/tache-form/tache-form.component';
import { TacheDetailsComponent } from './taches/tache-details/tache-details.component';

import { RouterModule } from '@angular/router';
import { ListProjetComponent } from './projets/List-projet/list-projets/list-projets.component';
import { EditProjetComponent } from './projets/edit-projet/edit-projet/edit-projet.component';


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
    TacheFormComponent,
    TacheDetailsComponent

    ListProjetComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, 
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
