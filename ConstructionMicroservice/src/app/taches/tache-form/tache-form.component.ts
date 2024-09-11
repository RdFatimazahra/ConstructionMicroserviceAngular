import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TacheService } from '../../Service/tache.service';
import { Tache } from '../../interfaces/tache';

@Component({
  selector: 'app-tache-form',
  templateUrl: './tache-form.component.html',
  styleUrls: ['./tache-form.component.css']
})
export class TacheFormComponent implements OnInit {
  tache: Tache = { id: 0, description: '', dateDebut: '', dateFin: '', statut: '', idProjet: 0 };
  isEditMode = false;

  constructor(
    private tacheService: TacheService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const tacheId = this.route.snapshot.paramMap.get('id');
    if (tacheId) {
      this.isEditMode = true;
      this.tacheService.getTacheById(+tacheId).subscribe((data: Tache) => {
        this.tache = data;
      });
    }
  }

  onSubmit() {
    if (this.isEditMode) {
      this.tacheService.updateTache(this.tache.id, this.tache).subscribe(() => {
        this.router.navigate(['/taches']);
      });
    } else {
      this.tacheService.createTache(this.tache, this.tache.idProjet).subscribe(() => {
        this.router.navigate(['/taches']);
      });
    }
  }
}
