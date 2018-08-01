import { Component, OnInit } from "@angular/core";
import { Battle } from "../../components/shared/battle";
import { Pokemons } from "./../../components/shared/pokemons";
import { PokemonDataService } from "./../../services/data.service";
import * as _ from "lodash";


@Component({
  selector: "app-battle-status",
  templateUrl: "./battle-status.component.html",
  styleUrls: ["./battle-status.component.css"]
})
export class BattleStatusComponent implements OnInit {
  constructor(private battleService: PokemonDataService) {}
  battles: Battle[] = [];

  ngOnInit() {
	this.getFightStatus();
  }

  getFightStatus() {
	this.battleService.getPokemons().subscribe(res => {
		const pokemons = _.filter(res[0].data, function(o) {
		return o.battle;
		});
		this.randomGenerator(pokemons);
	});
  }

  randomGenerator(pokemons) {
	const shuffleBattleNames = _.shuffle(pokemons);
	const pokemonList = _.slice(shuffleBattleNames, 0, 8);
	const randomNames = pokemonList.map(pokemon => pokemon.Name);
	for (let pairID = 0; pairID < 4; pairID++) {
		this.battles.push({
		id: pairID,
		pokemon1: randomNames[2 * pairID],
		pokemon2: randomNames[2 * pairID + 1],
		isActive: false
		});
	}
  }

}


