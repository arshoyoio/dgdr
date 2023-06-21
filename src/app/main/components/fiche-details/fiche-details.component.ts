import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isEmpty } from 'lodash-es';
import { ROLES } from '~/main/constants/roles';
import { Fiches, Recommandation } from '~/main/models/fiches';
import { FICHES } from '~/main/services/fake-data/fiches';
import { FichesService } from '~/main/services/fiches.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-fiche-details',
  templateUrl: './fiche-details.component.html',
  styleUrls: ['./fiche-details.component.css'],
})
export class FicheDetailsComponent implements AfterViewInit {
  roles: string[] = ROLES;
  fiche: Fiches = FICHES.find(
    (el) => el.ref === this.activatedRoute.snapshot.params['ref']
  ) as Fiches;

  constructor(private activatedRoute: ActivatedRoute, public ficheService: FichesService) {
    this.fiche.status = this.activatedRoute.snapshot.queryParams['statut'];

    if (isEmpty(this.fiche.recommandations)) {
      this.fiche.recommandations = [{ id: uuidv4() } as Recommandation];
    }
  }

  ngAfterViewInit(): void {
    $(".mat-mdc-tab-body-content").css('overflow','hidden')
  }

  selectResponsable(name: string) {
    if (this.fiche.status === 'notStarted') {
      this.fiche.status = 'inProgress'
    }
    this.fiche.respControle = name;
  }

  validate() {
    this.fiche.status = 'fixed';
    this.fiche.dateDiffusion = new Date().toISOString();
  }

  markAsRead() {
    this.fiche.status = 'broadcast';
    this.fiche.dateRelecture = new Date().toISOString();
  }

  addRecommandation() {
    const newRecommandation = { id: uuidv4() } as Recommandation;
    if (this.fiche.recommandations) {
      this.fiche.recommandations.push(newRecommandation);
      return;
    } 

    this.fiche.recommandations = [newRecommandation];
  }

  removeRecommandation(r: Recommandation) {
    this.fiche.recommandations = this.fiche.recommandations?.filter(el => String(el.id) !== String(r.id));
  }
}
