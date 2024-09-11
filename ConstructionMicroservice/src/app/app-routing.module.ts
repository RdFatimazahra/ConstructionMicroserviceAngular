import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login/login.component';
import { DashbordComponent } from './dashbord/dashbord/dashbord.component';
import { ListProjetComponent } from './projets/add-projet/list-projet/list-projet.component';
import { TacheListComponent } from './taches/tache-list/tache-list.component';



const routes: Routes = [
  { path: 'dashboard', component: DashbordComponent, children: [
      { path: 'list-projet', component: ListProjetComponent },
      // Ajoutez d'autres routes enfants ici
  ] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'taches', component: TacheListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
