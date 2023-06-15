import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexNonAxisChartSeries, ApexPlotOptions, ApexResponsive, ApexStroke, ApexTitleSubtitle, ApexXAxis } from "ng-apexcharts";

export interface ChartOptions {
    series: ApexAxisChartSeries;
    seriesP: ApexNonAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    title: ApexTitleSubtitle;
    stroke: ApexStroke;
    dataLabels: ApexDataLabels;
    responsive: ApexResponsive[];
    labels: any;
    plotOptions: ApexPlotOptions
  };