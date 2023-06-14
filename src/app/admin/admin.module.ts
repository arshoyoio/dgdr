import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

import { MaterialModule } from '../material.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ThemeComponent } from './components/theme/theme.component';
import { NiveauDeRisqueComponent } from './components/niveau-de-risque/niveau-de-risque.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ThemeComponent,
    NiveauDeRisqueComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
