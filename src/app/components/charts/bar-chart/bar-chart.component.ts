import { PokemonDataService } from "./../../../services/pokemon-data.service";
import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";

@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.css"]
})
export class BarChartComponent implements OnInit {
  constructor(private pokeService: PokemonDataService) {}
  public sortedData: any[];
  public barChartData: any[] = [{ data: []}];
  public barChartLabels: string[] = ["Bug","Dark","Dragon","Electric","Fairy","Fighting","Fire","Flying","Ghost","Grass","Ground","Ice","Normal","Poison","Psychic","Rock","Steel","Water"];
  public barChartType = "bar";
  public barChartLegend = false;
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
    let barData = Object.values(this.sortedData);
    this.barChartData = _.castArray(barData);
    console.log(this.barChartData);
    console.log(this.sortedData)
  })};

  
}
