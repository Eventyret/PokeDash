import { Component, OnInit } from "@angular/core";
import { PokemonDataService } from "./services/data.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
	loader = true;
	notFound = false;
	constructor(private pokemonService: PokemonDataService) {}

	ngOnInit() {
		// this.toastr.info("We are analyzing all the Pokémons we caught 📊", "Trying to catch them all...", {
		// 	positionClass: "toast-bottom-center",
		// 	timeOut: 3000
		// });
		this.pokemonService.getPokemons().subscribe(
			(data) => {
				sessionStorage.setItem("pokemons", JSON.stringify(data));
				// this.toastr.success("We have analyzed all the Pokémon enjoy...","Task Completed", {
				// 	positionClass: "toast-bottom-center",
				// 	timeOut: 3000
				// })
			},
			(error) => {
				// this.toastr.error(
				// 	"The truth is Rattata 🐀 chewed through the connection cable so we can't get your data. Please try again later",
				// 	"The Pokémon ran away... ",
				// 	{
				// 		positionClass: "toast-bottom-center",
				// 		timeOut: 5000
				// 	}
				// );
				// console.log(error);
			},
			() => {
				this.loader = false;
			}
		);
	}
}
