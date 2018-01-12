import { Pokemons } from './../../components/shared/pokemons';
import { PokemonDataService } from './../../services/pokemon-data.service';
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Battle } from "../../components/shared/battle";
import * as _ from "lodash";

const SAMPLE_BATTLES = [
  { id: 1, name: "Pokemon 1", fighting: "Pokemon 2", isActive: true },
  { id: 2, name: "Pokemon 3", fighting: "Pokemon 4", isActive: false },
  { id: 3, name: "Pokemon 5", fighting: "Pokemon 6", isActive: true },
  { id: 4, name: "Pokemon 7", fighting: "Pokemon 8", isActive: false }
];
@Component({
  selector: "app-battle-status",
  templateUrl: "./battle-status.component.html",
  styleUrls: ["./battle-status.component.css"]
})

export class BattleStatusComponent implements OnInit {

    randomPokemons: Pokemons[];
  constructor(private battleService: PokemonDataService) {}

  battles: Battle[] = SAMPLE_BATTLES;
  ngOnInit() {
    this.getFightStatus();
  }

   getFightStatus(){
    this.battleService.getPokemons()
    .subscribe(res => {
      let pokemons= _.filter(res.data, function(o){
     return o.battle});
     this.randomGenerator(pokemons);
      }
    )
  }

  randomGenerator(pokemons){
    let shuffledArray = _.shuffle(pokemons)
    this.randomPokemons = _.slice(shuffledArray, 0, 9)
    console.log(this.randomPokemons)
  }
}
