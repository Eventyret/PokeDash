import { PokemonDataService } from "./../../../services/pokemon-data.service";
import { Component, OnInit, OnChanges } from "@angular/core";
import * as _ from "lodash";

@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.css"]
})
export class BarChartComponent implements OnInit, OnChanges {
  constructor(private pokeService: PokemonDataService) {}
  public sortedData: any[];
  public barChartData: any[] = [{ data: [1, 2, 3] }];
  public barChartLabels: string[] = ["0", "0", "0"];
  public barChartType = "bar";
  public barChartLegend = false;
  public labels: any[];
  public chartData: any[];
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.pokeService.getPokemons().subscribe(res => {
      const data = res.data;
      this.sortedData = _.countBy(data, "Type1");
      console.log(this.sortedData);
      this.populateData();
    });
  }

  populateData() {
    let barData = Object.values(this.sortedData);
    this.chartData = _.castArray(barData);
    console.log(barData);
    let barLabels = Object.keys(this.sortedData);
    this.labels = _.castArray(barLabels);
    console.log(barLabels);
  }

  ngOnChanges(){
    this.barChartData = this.chartData
    setTimeout(() => {
      this.barChartLabels = this.labels
    }, 0);
  }

}
