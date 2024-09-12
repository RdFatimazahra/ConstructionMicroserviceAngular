import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login/login.component';
import { DashbordComponent } from './dashbord/dashbord/dashbord.component';
import { AddProjetComponent } from './projets/add-projet/add-projet/add-projet.component';
import { ListProjetComponent } from './projets/List-projet/list-projets/list-projets.component';
import { EditProjetComponent } from './projets/edit-projet/edit-projet/edit-projet.component';

const routes: Routes = [
  { path: 'dashboard', component: DashbordComponent, children: [
      { path: 'list-projet', component: ListProjetComponent },
      { path: 'edit-projet' , component: EditProjetComponent},
      { path: 'add-projet', component: AddProjetComponent },
      // Ajoutez d'autres routes enfants ici
  ] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
