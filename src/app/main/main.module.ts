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

@NgModule({
  declarations: [
    DashboardComponent,
    MainComponent,
    HeaderComponent,
    SidebarComponent,
    FichesViergesComponent,
    NouveauFicheViergeComponent,
    RapportsComponent,
    FichesComponent
  ],
  imports: [
    MaterialModule,
    NgChartsModule,
    CommonModule,
    MainRouting,
    NgApexchartsModule
  ]
})
export class MainModule { }
