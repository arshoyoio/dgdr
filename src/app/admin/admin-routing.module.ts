import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainComponent } from '../main/main.component';
import { ThemeComponent } from './components/theme/theme.component';
import { NiveauDeRisqueComponent } from './components/niveau-de-risque/niveau-de-risque.component';

const routes: Routes = [
  {
    path: 'admin',
    component: MainComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'theme',
        component: ThemeComponent
      },
      {
        path: 'niveau-de-risque',
        component: NiveauDeRisqueComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}