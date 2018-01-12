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
  battles: Battle[] = this.battles
  names: any[];
  Battles = [
    { id: 1, name: "Pokemon 1", fighting: "Pokemon 2", isActive: true },
    { id: 2, name: "Pokemon 3", fighting: "Pokemon 4", isActive: false },
    { id: 3, name: "Pokemon 5", fighting: "Pokemon 6", isActive: true },
    { id: 4, name: "Pokemon 7", fighting: "Pokemon 8", isActive: false }
  ];

  ngOnInit(){
    
  }
}


