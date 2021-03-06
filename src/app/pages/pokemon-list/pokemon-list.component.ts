import { PokemonDataService } from "../../services/data.service";
import { Component, OnInit } from "@angular/core";
import { Pokemons } from "../../shared/models/pokemons";
import { NgxSpinnerService } from "ngx-spinner";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ListHelpComponent } from "./components/modals/list-help/list-help.component";

@Component({
	selector: "app-pokemon-list",
	templateUrl: "./pokemon-list.component.html",
	styleUrls: ["./pokemon-list.component.scss"]
})
export class PokemonListComponent implements OnInit {
	constructor(private pokemonService: PokemonDataService, private spinner: NgxSpinnerService, private modalService: NgbModal) {}

	public data: Pokemons[] = [];
	public battleing;
	public sortBy = "id";
	public sortOrder = "asc";
	public rowsOnPage = 25;
	public filterQuery = "";
	public p = 1;

	ngOnInit() {
		this.spinner.show();
		this.populateTable();
	}

	populateTable() {
		this.pokemonService.getPokemons().subscribe(
			pokemon => {
				this.data = pokemon.results;
			},
			error => {
				console.log(error);
			},
			() => {
				this.spinner.hide();
			}
		);
	}
	openHelp() {
		this.modalService.open(ListHelpComponent, {
			centered: true,
			size: "lg"
		});
	}
}
