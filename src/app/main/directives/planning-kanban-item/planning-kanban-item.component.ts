import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Fiches } from '~/main/models/fiches';
import { FichesService } from '~/main/services/fiches.service';

@Component({
  selector: 'app-planning-kanban-item',
  templateUrl: './planning-kanban-item.component.html',
  styleUrls: ['./planning-kanban-item.component.css'],
})
export class PlanningKanbanItemComponent {
  @Input() item: Fiches;

  @Input() column: string;
  
  constructor(private router: Router, public ficheService: FichesService) {}
  details(id: string) {
    this.router.navigateByUrl(`/fiche/${id}/details`);
  }
}
