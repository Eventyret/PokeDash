import { Component, OnInit } from "@angular/core";
import { Battle } from "../../shared/models/battle";
import { PokemonDataService } from "../../services/data.service";
import * as _ from "lodash";
import { BattleHelpComponent } from "./components/battle-help/battle-help.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
	selector: "app-battle-status",
	templateUrl: "./battle-status.component.html",
	styleUrls: ["./battle-status.component.scss"]
})
export class BattleStatusComponent implements OnInit {
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
				this.pokemonList = _.filter(res.results, function(o) {
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
		const modalRef = this.modalService.open(BattleHelpComponent, {
			centered: true,
			size: "lg"
		});
	}

	randomGenerator(pokemons) {
		const shuffleBattleNames = _.shuffle(pokemons);
		const pokemonList = _.slice(shuffleBattleNames, 0, 80);
		const randomNames = _.map(pokemonList, "Name");
		const spriteName = _.map(pokemonList, "Sprite");
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
