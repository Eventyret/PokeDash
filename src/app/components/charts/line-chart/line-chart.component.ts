import { Component, OnInit } from '@angular/core';
import { LINE_CHART_COLORS } from "../../shared/chart.colors";

const SAMPLE: any[] = [
  { data: [14, 45, 24, 12, 59, 15], label: "Pokemon 1"},
  { data: [2, 55, 48, 55, 20, 35], label: "Pokemon 2"},
  { data: [32 , 78, 66, 23, 99, 75], label: "Pokemon 3"}
]

const SAMPLE_LABELS: string[] = ["Pok 1", "Pok 2", "Pok 3", "Pok 4", "Pok 5", "Pok 6",];

@Component({
  selector: "app-line-chart",
  templateUrl: "./line-chart.component.html",
  styleUrls: ["./line-chart.component.css"]
})
export class LineChartComponent implements OnInit {
  constructor() {}
  lineChartData = SAMPLE;
  lineChartLabels = SAMPLE_LABELS;
  llineChartOptions: any = {
    responsive: true
  };
  lineChartLegend: true;
  lineCharttype: "line";
  lineChartColors = LINE_CHART_COLORS;

  ngOnInit() {}
}
