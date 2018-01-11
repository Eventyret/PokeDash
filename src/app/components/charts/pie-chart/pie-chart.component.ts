import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-pie-chart",
  templateUrl: "./pie-chart.component.html",
  styleUrls: ["./pie-chart.component.css"]
})
export class PieChartComponent implements OnInit {
  constructor() {}

  pieChartData: number[] = [485, 238, 120];
  pieChartLabels: string[] = ["Pokemon 1", "Pokemon 2", "Pokemon 3"];
  colors: any[] = [
    {
      backgroundColor: ["#EF5350", "#42A5F5", "#FFEE58"]
    }
  ];

  pieChartType = "pie";

  ngOnInit() {}
}
