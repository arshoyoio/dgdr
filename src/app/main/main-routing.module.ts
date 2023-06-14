import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FichesViergesComponent } from './components/fiches-vierges/fiches-vierges.component';
import { NouveauFicheViergeComponent } from './components/nouveau-fiche-vierge/nouveau-fiche-vierge.component';
import { RapportsComponent } from './components/rapports/rapports.component';
import { FichesComponent } from './components/fiches/fiches.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'fiches-vierges',
        component: FichesViergesComponent,
      },
      {
        path: 'fiches',
        component: FichesComponent,
      },
      {
        path: 'documents/add',
        component: NouveauFicheViergeComponent,
      },
      {
        path: 'rapport',
        component: RapportsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRouting {}
