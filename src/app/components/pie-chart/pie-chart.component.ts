import { Component, Input, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexYAxis,
  ApexStroke,
  ApexLegend,
  ApexGrid,
  ApexFill,
  ApexDataLabels,
  ApexTooltip,
  
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  legend: ApexLegend;
  grid: ApexGrid;
  fill: ApexFill | undefined; // optional property for area charts only
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  colors: String[];
};

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
            name: 'masto',
            data: [200, 400, 300, 400, 200, 400]
            }, {
            name: 'baise',
            data: [500, 300, 400, 200, 500, 200]
          }],
            chart: {
            height: 280,
            type: 'area',
        toolbar:{
          show:false
        }
          },
      colors:["var(--rgba-primary-1)","#f5a792"],
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth',
        width:3,
        colors:["var(--primary)","var(--secondary)"],
          },
      legend:{
        show:false
      },
      grid:{
        show:false,
        strokeDashArray: 6,
        borderColor: '#dadada',
      },
      yaxis: {
        labels: {
        style: {
          colors: '#B5B5C3',
          fontSize: '12px',
          fontFamily: 'Poppins',
          fontWeight: 400
          
        },
        formatter: function (value) {
          return value + "k";
        }
        },
      },
          xaxis: {
            categories: ["Week 01","Week 02","Week 03","Week 04","Week 05","Week 06"],
        labels:{
          style: {
          colors: '#B5B5C3',
          fontSize: '12px',
          fontFamily: 'Poppins',
          fontWeight: 400
          
        },
        }
          },
      fill:{
        type:'solid',
        opacity:0.05
      },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          },
    };
  }

}
