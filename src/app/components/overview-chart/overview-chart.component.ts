import { Component, ViewChild } from '@angular/core';

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
  ApexPlotOptions,
  ApexMarkers,

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
  labels: String[];
  plotOptions: ApexPlotOptions;
  markers: ApexMarkers
};
@Component({
  selector: 'app-overview-chart',
  templateUrl: './overview-chart.component.html',
  styleUrls: ['./overview-chart.component.css']
})
export class OverviewChartComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;


  constructor() {
    this.chartOptions = {
      series: [{
        name: 'Number of Projects',
        type: 'column',
        data: [75, 85, 72, 100, 50, 100, 80, 75, 95, 35, 75, 100]
      }, {
        name: 'Revenue',
        type: 'area',
        data: [44, 65, 55, 75, 45, 55, 40, 60, 75, 45, 50, 42]
      }, {
        name: 'Active Projects',
        type: 'line',
        data: [30, 25, 45, 30, 25, 35, 20, 45, 35, 20, 35, 20]
      }],
      chart: {
        height: 300,
        type: 'line',
        stacked: false,
        toolbar: {
          show: false,
        },
      },
      stroke: {
        width: [0, 1, 1],
        curve: 'straight',
        dashArray: [0, 0, 5]
      },
      legend: {
        fontSize: '13px',
        fontFamily: 'poppins',
        labels: {
          colors: '#888888',
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '18%',
          borderRadius: 6,
        }
      },

      fill: {
        //opacity: [0.1, 0.1, 1],
        type: 'gradient',

        gradient: {
          inverseColors: false,
          shade: 'light',
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          
         
          stops: [0, 100, 100, 100]
        }
      },
      colors: ["var(--primary)", "#3AC977", "#FF5E5E"],
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
        'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ],
      markers: {
        size: 0
      },
      xaxis: {
        categories: 'month',
        labels: {
          style: {
            fontSize: '13px',
            colors: '#888888',
          },
        },
      },
      yaxis: {
        min: 0,
        tickAmount: 4,
        labels: {
          style: {
            fontSize: '13px',
            colors: '#888888',
          },
        },
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " points";
            }
            return y;

          }
        }
      }
    };
  }
}
