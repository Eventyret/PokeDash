import { Component, OnInit } from '@angular/core';

// Mock Data
const SAMPLE: any[] = [
  { data: [216, 12, 45, 96, 47, 60, 98], label: "Pokemon Numbers" },
  { data: [22, 52, 45, 206, 347, 60, 98], label: "Q5" }
];

const SAMPLE_LABLES: string[] = ['W1', 'G5', 'H7', 'D1', 'E55', 'G66', 'U86']
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public barChartData: any [] = SAMPLE;
  public barChartLabels: string[] = SAMPLE_LABLES;
  public barChartType = 'bar';
  public barChartLegend = false;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  ngOnInit() {
  }

}
