import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRouting } from './main-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainComponent } from './main.component';

import { NgChartsModule } from 'ng2-charts';
import { HeaderComponent } from './directives/header/header.component';
import { SidebarComponent } from './directives/sidebar/sidebar.component';
import { MaterialModule } from '../material.module';
import { FichesViergesComponent } from './components/fiches-vierges/fiches-vierges.component';

import { NgApexchartsModule } from 'ng-apexcharts';
import { NouveauFicheViergeComponent } from './components/nouveau-fiche-vierge/nouveau-fiche-vierge.component';
import { RapportsComponent } from './components/rapports/rapports.component';
import { FichesComponent } from './components/fiches/fiches.component';
import { PlanningDeControleComponent } from './components/planning-de-controle/planning-de-controle.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    MainComponent,
    HeaderComponent,
    SidebarComponent,
    FichesViergesComponent,
    NouveauFicheViergeComponent,
    RapportsComponent,
    FichesComponent,
    PlanningDeControleComponent
  ],
  imports: [
    MaterialModule,
    NgChartsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MainRouting,
    NgApexchartsModule
  ]
})
export class MainModule { }
