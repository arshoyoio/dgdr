import { Component, OnInit, ViewChild } from '@angular/core';
import { TRIMESTRES } from '../../constants/trimestres';
import { ToolsService } from '../../services/tools.service';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { PERIODICITE } from '../../constants/periodicite';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { FICHES } from '../../services/fake-data/fiches';
import { Fiches, FichesByStatus } from '../../models/fiches';
import { STATUTS } from '../../constants/statuts';
import { ChartComponent } from 'ng-apexcharts';
import { ChartOptions } from '../../models/custom-chart-options';
import { Router } from '@angular/router';
import { FichesService } from '~/main/services/fiches.service';
import { isEmpty } from 'lodash-es';

@Component({
  selector: 'app-planning-de-controle',
  templateUrl: './planning-de-controle.component.html',
  styleUrls: ['./planning-de-controle.component.scss'],
})
export class PlanningDeControleComponent implements OnInit {
  trimestre: any;
  daysLeft: number;
  chartData: any;
  myControl = new FormControl('');
  options: string[] = [];
  periodicite = PERIODICITE;
  allStatus = STATUTS;
  period: string = '';
  filteredOptions: Observable<string[]>;

  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  data: FichesByStatus | any = {
    notStarted: [],
    inProgress: [],
    onHold: [],
    broadcast: [],
    fixed: [],
  };

  constructor(private readonly toolsService: ToolsService, private router: Router, public ficheService: FichesService) {
    const responsables = FICHES.map((el) => el.respControle);
    const uniqueValues = [...new Set(responsables)];
    const result = uniqueValues.map((val) => val);
    this.options = result.filter(el => el) as string[];
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  ficheFilter(fiche: Fiches) {
    if (!this.myControl.value) return true;
    const search: string = this.myControl.value as string;
    const regex = new RegExp(search, 'i');
    if (!fiche.respControle) return;
    return regex.test(String(fiche.respControle));
  }

  ngOnInit(): void {
    for (const fiche of FICHES) {
      if (this.data[`${fiche.status}`]) {
        this.data[`${fiche.status}`].push(fiche);
      }
    }

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );

    const now = new Date();
    this.trimestre = TRIMESTRES.find(
      (el) => now >= new Date(el.debut) && now <= new Date(el.fin)
    );
    this.daysLeft = this.toolsService.nombreJoursEntreDeuxDates(
      now.toISOString(),
      this.trimestre.fin
    );

    this.initChartData();
  }

  details(fiche: Fiches, statut: string) {
    this.router.navigate([`/fiche/${fiche.ref}/details`], { queryParams: { statut } });
  }

  initChartData() {
    this.chartOptions = {
      series: [
        {
          name: '',
          data: [
            this.data.notStarted.length,
            this.data.inProgress.length,
            this.data.onHold.length,
            this.data.broadcast.length,
            this.data.fixed.length,
          ],
        },
      ],
      chart: {
        type: 'bar',
        width: 600,
        height: 200,
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          'Non démarré',
          'En cours',
          'En attente de relecture',
          'Diffusé',
          'Figé',
        ],
      },
    };
  }

  drop(event: CdkDragDrop<Fiches[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    for (const [ index, value ] of Object.entries(this.data)) {
      if (!isEmpty(value)) {
        for (const el of value as Fiches[]) {
          el.status = index;
          if (index === 'broadcast') {
            el.dateRelecture = new Date().toISOString();
          } else if (index === 'fixed') {
            el.dateDiffusion = new Date().toISOString();
            el.dateControle = new Date().toISOString();
          }
        }
      }
    }
    this.initChartData();
  }
}
