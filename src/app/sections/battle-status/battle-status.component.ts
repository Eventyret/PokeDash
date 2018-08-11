import { Component, OnInit } from "@angular/core";
import { Battle } from "../../components/shared/battle";
import { Pokemons } from "./../../components/shared/pokemons";
import { PokemonDataService } from "./../../services/data.service";
import * as _ from "lodash";

@Component({
	selector: "app-battle-status",
	templateUrl: "./battle-status.component.html",
	styleUrls: ["./battle-status.component.scss"]
})
export class BattleStatusComponent implements OnInit {
	constructor(private battleService: PokemonDataService) {}
	battles: Battle[] = [];
	pokemonList: any;

	ngOnInit() {
		this.getFightStatus();
	}

	getFightStatus() {
		this.battleService.getPokemons().subscribe(res => {
			this.pokemonList = _.filter(res.results, function(o) {
				return o.Battle;
			});
			this.randomGenerator(this.pokemonList);
		});
	}

	refreshMatch(){
		this.randomGenerator(this.pokemonList)
	}

	randomGenerator(pokemons) {
		const shuffleBattleNames = _.shuffle(pokemons);
		const pokemonList = _.slice(shuffleBattleNames, 0, 80);
		const randomNames = _.map(pokemonList, "Name");
		const spriteName = _.map(pokemonList, "Sprite");
		for (let pairID = 0; pairID < 4; pairID++) {
			this.battles.push({
				id: pairID,
				pokemon1: randomNames[2 * pairID],
				pokemon2: randomNames[2 * pairID + 1],
				sprite1: spriteName[2 * pairID],
				sprite2: spriteName[2 * pairID + 1],
				isActive: false
			});
		}
	}
}
