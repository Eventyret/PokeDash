import { PokemonDataService } from "./../../../services/data.service";
import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";

@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.css"]
})
export class BarChartComponent implements OnInit {
  constructor(private pokeService: PokemonDataService) {}
  public sortedData: any;
  // Set empty data due chartJS requires this on render, this will be populated later
  public barChartData: any[] = [{ data: [] }];
  // Setting the labels, this is also used to generate the data
  public barChartLabels: string[] = [
	"Bug",
	"Dark",
	"Dragon",
	"Electric",
	"Fairy",
	"Fighting",
	"Fire",
	"Flying",
	"Ghost",
	"Grass",
	"Ground",
	"Ice",
	"Normal",
	"Poison",
	"Psychic",
	"Rock",
	"Steel",
	"Water"
  ];
  public barChartType = "bar";
  public barChartLegend = false;
  public barChartOptions: any = {
	scaleShowVerticalLines: false,
	responsive: true
  };
  barChartColors: any[] = [
	{
		backgroundColor: [
		"#EF5350",
		"#705848",
		"#7038F8",
		"#F8D030",
		"#EE99AC",
		"#C03028",
		"#F08030",
		"#A890F0",
		"#705898",
		"#78C850",
		"#E0C068",
		"#98D8D8",
		"#A8A878",
		"#A040A0",
		"#F85888",
		"#B8A038",
		"#B8B8D0",
		"#6890F0"
		]
	}
  ];

  ngOnInit() {
	this.getData();
  }

  getData() {
	this.pokeService.getPokemons().subscribe(res => {
		const data = res[0].data;
		this.sortedData = _.countBy(data, "Type1");
		this.mapLabels();
	});
  }

  mapLabels() {
	this.barChartData = this.barChartLabels.map(label => this.sortedData[label]);
  }
}
