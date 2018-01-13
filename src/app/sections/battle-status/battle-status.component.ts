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
      let pokemons = _.filter(res.data, function(o) {
        return o.battle;
      });
      this.randomGenerator(pokemons);
    });
  }

  randomGenerator(pokemons) {
    let shuffleBattleNames = _.shuffle(pokemons);
    let pokemonsList = _.slice(shuffleBattleNames, 0, 8);
    let randomNames = pokemonsList.map(pokemon => pokemon.Name);
    let tempBattle = [];
    for (let pairID = 0; pairID < 4; pairID++) {
      this.battles.push({
        "id": pairID,
        "pokemon1": randomNames[2*pairID],
        "pokemon2": randomNames[2*pairID+1],
        "isActive": true
      });
      console.log(this.battles);
    }
  }
  
}


