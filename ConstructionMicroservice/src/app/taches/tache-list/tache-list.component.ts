import { Component, OnInit } from '@angular/core';
import { TacheService } from '../../Service/tache.service';
import { Tache } from '../../interfaces/tache';

@Component({
  selector: 'app-tache-list',
  templateUrl: './tache-list.component.html',
  styleUrls: ['./tache-list.component.css']
})
export class TacheListComponent implements OnInit {
  taches: Tache[] = [];

  constructor(private tacheService: TacheService) { }

  ngOnInit(): void {
    this.fetchTaches();
  }

  fetchTaches() {
    this.tacheService.getAllTaches().subscribe((data: Tache[]) => {
      this.taches = data;
    });
  }

  deleteTache(id: number) {
    this.tacheService.deleteTache(id).subscribe(() => {
      this.fetchTaches();
    });
  }
}
