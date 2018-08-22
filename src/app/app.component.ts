import { Component, OnInit } from "@angular/core";
import { PokemonDataService } from "./services/data.service";
import { ToastrService } from "ngx-toastr";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
	loader = true;
	notFound = false;
	constructor(private pokemonService: PokemonDataService, private toastr: ToastrService) {}

	ngOnInit() {
		this.toastr.info("We are wrapping up all the Ultraballs and preparing your dashboard ", "Trying to catch them all...", {
			positionClass: "toast-bottom-center",
			timeOut: 5000
		});
		this.pokemonService.getPokemons().subscribe(
			data => {
				sessionStorage.setItem("pokemons", JSON.stringify(data));
			},
			error => {
				this.toastr.error(
					"The truth is Rattata 🐀 chewed through the connection cable so we can't get your data. Please try again later",
					"The Pokémon ran away... ",
					{
						positionClass: "toast-bottom-center",
						timeOut: 5000
					}
				);
				console.log(error);
			},
			() => {
				this.loader = false;
			}
		);
	}
}
