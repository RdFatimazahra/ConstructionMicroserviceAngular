import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { projet } from 'src/app/interfaces/projet';
import { ProjetServiceService } from 'src/app/Service/projet-service.service';

@Component({
  selector: 'app-list-projets',
  templateUrl: './list-projets.component.html',
  styleUrls: ['./list-projets.component.scss']
})
export class ListProjetComponent implements OnInit {

  projetList: projet[] = [];

  constructor(private projetService: ProjetServiceService, private dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    this.loadProjets();
  }

  private loadProjets(): void {
    this.projetService.getProjetList().subscribe(
      (data: projet[]) => {
        console.log('Liste des projets récupérée :', data);
        this.projetList = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération de la liste des projets', error);
      }
    );
  }

  updateProjet(idProjet: number): void {
    this.router.navigate(['/edit-projet', idProjet]); // Redirige vers la page de mise à jour
  }

  deleteProjet(idProjet: number): void {
    this.projetService.deleteProjet(idProjet).subscribe(
      () => {
        this.projetList = this.projetList.filter(projet => projet.idProjet !== idProjet);
        console.log('Projet supprimé avec succès');
      },
      (error) => {
        console.error('Erreur lors de la suppression du projet', error);
      }
    );
  }
}
