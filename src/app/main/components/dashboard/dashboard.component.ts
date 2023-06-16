import { Component, OnInit, ViewChild } from '@angular/core';
/* import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts'; */
import { LAST_HISTORY } from '../../services/fake-data/history';
import { ChartComponent, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle, ApexStroke, ApexDataLabels, ApexResponsive, ApexNonAxisChartSeries, ApexLegend, ApexPlotOptions, ApexFill } from 'ng-apexcharts';
import { Router } from '@angular/router';
import { ROLES } from '../../constants/roles';
import { THEMES } from '../../services/fake-data/theme';

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
  legend: ApexLegend;
  plotOptions: ApexPlotOptions;
  fill: ApexFill
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

  // idsFiche: any[] = [];
  isAdmin: boolean = false;
  roles = ROLES;
  role: string = '';
  theme: any[] = THEMES;
  themeClasses: any[] = [];

  constructor(private router: Router) {
    // this.idsFiche = this.history.map((f) => f.fiche);
    this.themeClasses = this.theme.map((c) => c.classe);

    this.chartOptionsMultiple = {
      series: [
        {
          name: "Risque",
          data: [2, 5, 18, 42, 33, 7, 28, 51, 12]
        },
        {
          name: "Fiches",
          data: [0, 9, 2, 25, 0, 12, 6, 37, 8]
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        width: 600
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "100%",
          // endingShape: "rounded",
          borderRadius: 5,
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: this.themeClasses
      },
      fill: {
        opacity: 1
      },
    };

    // Graphe par Thème
    this.chartOptionsT = {
      series: [
        {
          name: "Nombre fiche",
          data: [10, 13, 8, 1, 30, 18, 5, 12, 4, 0]
        }
      ],
      chart: {
        height: 250,
        width: 600,
        type: "bar"
      },
      xaxis: {
        categories: this.themeClasses
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
