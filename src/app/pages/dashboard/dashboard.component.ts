import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Pokemons } from "../../shared/models/pokemons";
import { AvgAttributesComponent } from "./components/modals/avg-attributes/avg-attributes.component";
import { PokemonTypesComponent } from "./components/modals/pokemon-types/pokemon-types.component";

@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
	constructor(private modalService: NgbModal) {}

	types: any[];
	pokemons: Pokemons[];

	ngOnInit() {}

	openHelpTypes() {
		const modalRef = this.modalService.open(PokemonTypesComponent, {
			centered: true,
			size: "lg"
		});
	}
	openHelpAttr() {
		const modalRef = this.modalService.open(AvgAttributesComponent, {
			centered: true,
			size: "lg"
		});
	}
}
