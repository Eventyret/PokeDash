import { Pokemons } from "./../../shared/pokemons";
import { PokemonDataService } from "./../../../services/data.service";
import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";
@Component({
  selector: "app-pie-chart",
  templateUrl: "./pie-chart.component.html",
  styleUrls: ["./pie-chart.component.scss"]
})
export class PieChartComponent implements OnInit {
  constructor(private pokeService: PokemonDataService) {}

  pieChartData: number[] = [25, 90, 44, 30];
  pieChartLabels: string[] = ["Attack", "Defense", "Speed", "HP"];
  colors: any[] = [
	{
		backgroundColor: ["#F62D14", "#42A5F5", "#FFCB05", "#78C850"]
	}
  ];

  pieChartType = "pie";

  attack: number;
  defense: number;
  speed: number;
  hp: number;
  pokemon: Pokemons[];

  ngOnInit() {
	this.getData();
  }

  getData() {
	this.pokeService.getPokemons().subscribe(res => {
		this.pokemon = res.results;
		this.findAverage();
	});
  }

  findAverage() {
	this.attack = _.meanBy(this.pokemon, function(o) {
		return o.Attack;
	});
	this.defense = _.meanBy(this.pokemon, function(o) {
		return o.Defense;
	});
	this.speed = _.meanBy(this.pokemon, function(o) {
		return o.Speed;
	});
	this.hp = _.meanBy(this.pokemon, function(o) {
		return o.HP;
	});
	this.generatePieData();
  }
  generatePieData() {
	const tempArray = [];
	const filledArray = tempArray.push(this.attack, this.defense, this.speed, this.hp);
	this.pieChartData = tempArray;
  }
}
