import { Component, OnInit } from "@angular/core";
import { Battle } from "../../shared/models/battle";
import { PokemonDataService } from "../../services/data.service";
import { slice as _slice , map as _map, shuffle as _shuffle, filter as _filter } from "lodash";
import { BattleHelpComponent } from "./components/battle-help/battle-help.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
	selector: "app-battle-page",
	templateUrl: "./battle-page.component.html",
	styleUrls: ["./battle-page.component.scss"]
})
export class BattlePageComponent implements OnInit {
	constructor(private battleService: PokemonDataService, private modalService: NgbModal, private spinner: NgxSpinnerService) {}
	battles: Battle[] = [];
	pokemonList: any;

	ngOnInit() {
		this.spinner.show();
		this.getFightStatus();
	}

	getFightStatus() {
		this.battleService.getPokemons().subscribe(
			res => {
				this.pokemonList = _filter(res.results, function(o) {
					return o.Battle;
				});
				this.randomGenerator(this.pokemonList);
			},
			error => {
				console.log(error);
			},
			() => {
				this.spinner.hide();
			}
		);
	}

	refreshMatch() {
		this.randomGenerator(this.pokemonList);
	}

	openHelp() {
		this.modalService.open(BattleHelpComponent, {
			centered: true,
			size: "lg"
		});
	}

	randomGenerator(pokemons) {
		const shuffleBattleNames = _shuffle(pokemons);
		const pokemonList = _slice(shuffleBattleNames, 0, 80);
		const randomNames = _map(pokemonList, "Name");
		const spriteName = _map(pokemonList, "Sprite");
		for (let pairID = 0; pairID < 4; pairID++) {
			this.battles.push({
				id: pairID,
				pokemon1: randomNames[2 * pairID],
				pokemon2: randomNames[2 * pairID + 1],
				sprite1: spriteName[2 * pairID],
				sprite2: spriteName[2 * pairID + 1],
				isActive: false
			});
		}
	}
}
