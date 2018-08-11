import { Pokemons } from "../../../../shared/models/pokemons";
import { PokemonDataService } from "../../../../services/data.service";
import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";
import { NgxSpinnerService } from "ngx-spinner";
@Component({
	selector: "app-pie-chart",
	templateUrl: "./pie-chart.component.html",
	styleUrls: ["./pie-chart.component.scss"]
})
export class PieChartComponent implements OnInit {
	constructor(private pokeService: PokemonDataService, private spinner: NgxSpinnerService) {}

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
		this.spinner.show();
		this.getData();
	}

	getData() {
		this.pokeService.getPokemons().subscribe(
			res => {
				this.pokemon = res.results;
				this.findAverage();
			},
			error => {
				console.log(error);
			},
			() => {
				this.spinner.hide();
			}
		);
	}

	findAverage() {
		this.attack = _.round(
			_.meanBy(this.pokemon, function(o) {
				return o.Attack;
			}),
			2
		);
		this.defense = _.round(
			_.meanBy(this.pokemon, function(o) {
				return o.Defense;
			}),
			2
		);
		this.speed = _.round(
			_.meanBy(this.pokemon, function(o) {
				return o.Speed;
			}),
			2
		);
		this.hp = _.round(
			_.meanBy(this.pokemon, function(o) {
				return o.HP;
			}),
			2
		);
		this.generatePieData();
	}
	generatePieData() {
		const tempArray = [];
		const filledArray = tempArray.push(this.attack, this.defense, this.speed, this.hp);
		this.pieChartData = tempArray;
	}
}
