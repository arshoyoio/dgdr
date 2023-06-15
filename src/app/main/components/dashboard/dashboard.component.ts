import { Component, OnInit, ViewChild } from '@angular/core';
/* import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts'; */
import { LAST_HISTORY } from '../../services/fake-data/history';
import { ChartComponent, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle, ApexStroke, ApexDataLabels, ApexResponsive, ApexNonAxisChartSeries } from 'ng-apexcharts';
import { Router } from '@angular/router';
import { ROLES } from '../../constants/roles';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  seriesP: ApexNonAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  history: any[] = LAST_HISTORY;

  @ViewChild("chart") chart: ChartComponent | any;
  chartOptionsMultiple: Partial<ChartOptions>;
  chartOptionsT: Partial<ChartOptions>;
  chartOptionsR: Partial<ChartOptions>;
  chartOptionPie: Partial<ChartOptions>;

  idsFiche: any[] = [];
  isAdmin: boolean = false;
  roles = ROLES;
  role: string = '';

  constructor(private router: Router) {
    this.idsFiche = this.history.map((f) => f.fiche);

    this.chartOptionsMultiple = {
      series: [
        {
          name: "Thème",
          data: [10, 2, 28, 7, 36, 45, 11]
        },
        {
          name: "Risque",
          data: [11, 32, 45, 32, 34, 52, 41]
        }
      ],
      chart: {
        height: 300,
        width: 800,
        type: "area"
      },
      title: {
        text: "Fiche par thème et risque"
      },
      dataLabels: {
        enabled: false
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ],
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        categories: this.idsFiche
      },
    }

    // Graphe par Thème
    this.chartOptionsT = {
      series: [
        {
          name: "Nombre fiche",
          data: [10, 13, 8, 1, 30, 18, 5]
        }
      ],
      chart: {
        height: 250,
        width: 600,
        type: "bar"
      },
      xaxis: {
        categories: ["A", "B",  "C",  "D",  "E",  "F",  "G"]
      }
    };

    // Graphe par risque
    this.chartOptionsR = {
      series: [
        {
          name: "Nombre fiche",
          data: [42, 23, 5]
        }
      ],
      chart: {
        height: 250,
        width: 600,
        type: "bar"
      },
      xaxis: {
        categories: ["Faible", "Moyenne",  "Elevée"]
      }
    };

    // Pie Chart
    this.chartOptionPie = {
      seriesP: [44, 55, 13, 43],
      chart: {
        width: 420,
        type: "pie"
      },
      labels: ["Admin", "RCCI", "Manager", "Junior"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 420
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  ngOnInit() {
    if (this.router.url.includes('admin=true')) this.isAdmin = true;
  }

}
