import { PokemonDataService } from "./../../services/data.service";
import { Component, OnInit } from "@angular/core";
import { Pokemons } from "../../components/shared/pokemons";
import * as _ from "lodash";

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.css"]
})
export class PokemonListComponent implements OnInit {
  constructor(private pokemonService: PokemonDataService) {}

  public data: any[];
  public battleing;
  public sortBy = "Name";
  public sortOrder = "asc";
  public rowsOnPage = 10;
  public filterQuery = "";

  ngOnInit() {
	this.populateTable();
  }

  populateTable(): void {
	this.pokemonService.getPokemons().subscribe(pokemon => {
		this.data = pokemon[0].data;
	});
  }
}
