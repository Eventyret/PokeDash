import { Component, OnInit } from "@angular/core";
import { Battle } from "../../components/shared/battle";
import { Pokemons } from "./../../components/shared/pokemons";
import { PokemonDataService } from "./../../services/pokemon-data.service";
import * as _ from "lodash";


@Component({
  selector: "app-battle-status",
  templateUrl: "./battle-status.component.html",
  styleUrls: ["./battle-status.component.css"]
})
export class BattleStatusComponent implements OnInit {
  constructor(private battleService: PokemonDataService) {}
  names:  any;
  Battles = [
    { id: 1, name: "Pokemon 1", fighting: "Pokemon 2", isActive: true },
    { id: 2, name: "Pokemon 3", fighting: "Pokemon 4", isActive: false },
    { id: 3, name: "Pokemon 5", fighting: "Pokemon 6", isActive: true },
    { id: 4, name: "Pokemon 7", fighting: "Pokemon 8", isActive: false }
  ];
  battles: Battle[] = this.Battles;

  ngOnInit() {
    this.getFightStatus();
  }

  getFightStatus() {
    this.battleService.getPokemons().subscribe(res => {
      let pokemons = _.filter(res.data, function(o) {
        return o.battle;
      });
      this.randomGenerator(pokemons);
    });
  }

  randomGenerator(pokemons) {
    let shuffledArray = _.shuffle(pokemons);
    let pokemonBattles = _.slice(shuffledArray, 0, 8);
    console.log(pokemonBattles)
    this.names = pokemonBattles.map(pokemon => pokemon.Name);
    for (let pair = 0; pair < this.names.length / 2; pair++) {
    this.names[2 * pair], this.names[2 * pair + 1];
    }
    console.log(this.names);
  }
  
}


