import { Component, OnInit } from "@angular/core";
import { PokemonDataService } from "./services/data.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
	loader = true;
	notFound = false;
	constructor(private pokemonService: PokemonDataService) {}

	ngOnInit() {
		this.pokemonService.getPokemons().subscribe(
			data => {
				sessionStorage.setItem("pokemons", JSON.stringify(data));
			},
			error => {
				console.log(error);
			},
			() => {
				this.loader = false;
			}
		);
	}
}
